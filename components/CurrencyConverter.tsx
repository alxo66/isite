'use client'

import { RefreshCw, DollarSign, Bitcoin, Euro, Calculator } from 'lucide-react'
import { useState, useEffect } from 'react'

interface ExchangeRates {
  USD: number
  RUB: number
  EUR: number
  BTC: number
  ETH: number
  USDT: number
  TON: number
}

export default function CurrencyConverter() {
  const [amount, setAmount] = useState<string>('100')
  const [fromCurrency, setFromCurrency] = useState<string>('USD')
  const [toCurrency, setToCurrency] = useState<string>('RUB')
  const [convertedAmount, setConvertedAmount] = useState<number>(0)
  const [rates, setRates] = useState<ExchangeRates>({
    USD: 1,
    RUB: 90, // Примерный курс
    EUR: 0.92,
    BTC: 0.000023, // Пример: 1 USD = 0.000023 BTC
    ETH: 0.00043,  // Пример: 1 USD = 0.00043 ETH
    USDT: 1,
    TON: 2.3 // Пример: 1 USD = 2.3 TON
  })
  const [isLoading, setIsLoading] = useState(false)

  // Загрузка реальных курсов
  const fetchRates = async () => {
    setIsLoading(true)
    try {
      // Используем CoinGecko API для получения курсов
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,the-open-network&vs_currencies=usd,rub,eur'
      )
      const data = await response.json()
      
      // Получаем курс USD/RUB (можно использовать другой API)
      const rubResponse = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
      const rubData = await rubResponse.json()
      
      setRates({
        USD: 1,
        RUB: rubData.rates.RUB || 90,
        EUR: rubData.rates.EUR || 0.92,
        BTC: 1 / data.bitcoin.usd,
        ETH: 1 / data.ethereum.usd,
        USDT: 1,
        TON: 1 / data['the-open-network'].usd
      })
      
    } catch (error) {
      console.error('Ошибка загрузки курсов:', error)
      // Используем статические курсы в случае ошибки
      setRates({
        USD: 1,
        RUB: 90,
        EUR: 0.92,
        BTC: 0.000023,
        ETH: 0.00043,
        USDT: 1,
        TON: 2.3
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchRates()
    // Обновляем курсы каждые 60 секунд
    const interval = setInterval(fetchRates, 60000)
    return () => clearInterval(interval)
  }, [])

  // Конвертация
  useEffect(() => {
    if (!amount || isNaN(parseFloat(amount))) {
      setConvertedAmount(0)
      return
    }

    const numAmount = parseFloat(amount)
    
    // Конвертация через USD как базовую валюту
    const amountInUSD = numAmount / (rates[fromCurrency as keyof ExchangeRates] || 1)
    const result = amountInUSD * (rates[toCurrency as keyof ExchangeRates] || 1)
    
    setConvertedAmount(parseFloat(result.toFixed(8)))
  }, [amount, fromCurrency, toCurrency, rates])

  const swapCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  const currencies = [
    { code: 'USD', name: 'Доллар США', icon: <DollarSign className="w-4 h-4" /> },
    { code: 'RUB', name: 'Российский рубль', icon: '₽' },
    { code: 'EUR', name: 'Евро', icon: <Euro className="w-4 h-4" /> },
    { code: 'BTC', name: 'Bitcoin', icon: <Bitcoin className="w-4 h-4" /> },
    { code: 'ETH', name: 'Ethereum', icon: 'Ξ' },
    { code: 'USDT', name: 'Tether', icon: '₮' },
    { code: 'TON', name: 'Toncoin', icon: 'TON' }
  ]

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Calculator className="w-6 h-6 mr-3 text-apple-blue" />
          <h3 className="text-xl font-bold">Конвертер валют</h3>
        </div>
        <button
          onClick={fetchRates}
          disabled={isLoading}
          className="flex items-center text-sm text-apple-blue hover:text-blue-700"
        >
          <RefreshCw className={`w-4 h-4 mr-1 ${isLoading ? 'animate-spin' : ''}`} />
          {isLoading ? 'Обновление...' : 'Обновить'}
        </button>
      </div>
      
      {/* Форма конвертера */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">У меня есть:</label>
          <div className="flex space-x-2">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-apple-blue"
              placeholder="Введите сумму"
              min="0"
              step="0.01"
            />
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-32 px-3 py-3 border rounded-lg bg-white"
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Кнопка обмена */}
        <div className="flex justify-center">
          <button
            onClick={swapCurrencies}
            className="p-2 bg-white border rounded-full hover:bg-gray-50 transition"
            title="Поменять валюты местами"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Я получу:</label>
          <div className="flex space-x-2">
            <div className="flex-1 px-4 py-3 bg-white border rounded-lg">
              <div className="text-2xl font-bold">
                {convertedAmount.toLocaleString('ru-RU', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 8
                })}
              </div>
            </div>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-32 px-3 py-3 border rounded-lg bg-white"
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Текущие курсы */}
      <div className="mt-8 pt-6 border-t">
        <h4 className="font-bold mb-3">Актуальные курсы:</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white p-3 rounded-lg text-center">
            <div className="font-bold">1 BTC</div>
            <div className="text-sm text-gray-600">
              ${(1 / rates.BTC).toLocaleString('ru-RU', {maximumFractionDigits: 0})}
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg text-center">
            <div className="font-bold">1 ETH</div>
            <div className="text-sm text-gray-600">
              ${(1 / rates.ETH).toLocaleString('ru-RU', {maximumFractionDigits: 0})}
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg text-center">
            <div className="font-bold">1 TON</div>
            <div className="text-sm text-gray-600">
              ${(1 / rates.TON).toFixed(2)}
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg text-center">
            <div className="font-bold">$1</div>
            <div className="text-sm text-gray-600">
              {rates.RUB.toFixed(2)} ₽
            </div>
          </div>
        </div>
        
        <div className="mt-4 text-xs text-gray-500">
          <p>Курсы обновляются автоматически каждую минуту</p>
          <p>Данные предоставляются CoinGecko API</p>
        </div>
      </div>
    </div>
  )
}
