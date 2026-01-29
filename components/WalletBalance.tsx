'use client'

import { Wallet, Copy, Check, Plus, QrCode } from 'lucide-react'
import { useState, useEffect } from 'react'

interface CryptoWallet {
  symbol: string
  name: string
  address: string
  network: string
}

export default function WalletBalance() {
  const [balance, setBalance] = useState(0.00)
  const [copied, setCopied] = useState<string | null>(null)
  const [activeCrypto, setActiveCrypto] = useState('BTC')
  const [showAllWallets, setShowAllWallets] = useState(false)
  
  const wallets: CryptoWallet[] = [
    { symbol: 'BTC', name: 'Bitcoin', address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', network: 'Bitcoin Mainnet' },
    { symbol: 'ETH', name: 'Ethereum', address: '0x742d35Cc6634C0532925a3b844Bc9e0F1aB2B3c8', network: 'Ethereum ERC20' },
    { symbol: 'USDT', name: 'Tether', address: '0x742d35Cc6634C0532925a3b844Bc9e0F1aB2B3c8', network: 'ERC20' },
    { symbol: 'TON', name: 'Toncoin', address: 'UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKZ', network: 'TON' },
  ]

  // Загружаем баланс из localStorage
  useEffect(() => {
    const savedBalance = localStorage.getItem('wallet-balance')
    if (savedBalance) {
      setBalance(parseFloat(savedBalance))
    }
  }, [])

  // Сохраняем баланс в localStorage
  useEffect(() => {
    localStorage.setItem('wallet-balance', balance.toString())
  }, [balance])

  const copyAddress = (address: string, symbol: string) => {
    navigator.clipboard.writeText(address)
    setCopied(symbol)
    setTimeout(() => setCopied(null), 2000)
  }

  const handleAddBalance = () => {
    const amount = parseFloat(prompt('Введите сумму для пополнения ($):', '100') || '0')
    if (amount > 0) {
      setBalance(prev => {
        const newBalance = prev + amount
        alert(`Баланс пополнен на $${amount}. Новый баланс: $${newBalance.toFixed(2)}`)
        return newBalance
      })
    }
  }

  const activeWallet = wallets.find(w => w.symbol === activeCrypto)

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Wallet className="w-6 h-6 mr-3" />
          <h3 className="text-xl font-bold">Крипто-кошелек</h3>
        </div>
        <button
          onClick={handleAddBalance}
          className="flex items-center text-sm bg-apple-blue hover:bg-blue-600 px-4 py-2 rounded-full transition"
        >
          <Plus className="w-4 h-4 mr-1" />
          Пополнить
        </button>
      </div>
      
      {/* Баланс */}
      <div className="mb-8">
        <p className="text-gray-400 mb-2">Баланс в долларах</p>
        <p className="text-4xl font-bold">${balance.toFixed(2)}</p>
        <p className="text-sm text-gray-400 mt-2">
          ≈ {(balance / 43000).toFixed(6)} BTC • {(balance / 2300).toFixed(4)} ETH
        </p>
      </div>
      
      {/* Выбор криптовалюты */}
      <div className="mb-6">
        <p className="text-gray-400 mb-3">Выберите криптовалюту для пополнения:</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {wallets.map((wallet) => (
            <button
              key={wallet.symbol}
              onClick={() => setActiveCrypto(wallet.symbol)}
              className={`px-4 py-2 rounded-full transition ${
                activeCrypto === wallet.symbol 
                  ? 'bg-white text-black' 
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {wallet.symbol}
            </button>
          ))}
          <button
            onClick={() => setShowAllWallets(!showAllWallets)}
            className="px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700"
          >
            {showAllWallets ? 'Скрыть' : 'Еще...'}
          </button>
        </div>
      </div>
      
      {/* Адрес выбранной криптовалюты */}
      {activeWallet && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-gray-400">Адрес {activeWallet.name}</p>
              <p className="text-xs text-gray-500">{activeWallet.network}</p>
            </div>
            <button
              onClick={() => copyAddress(activeWallet.address, activeWallet.symbol)}
              className="flex items-center text-blue-400 hover:text-blue-300"
            >
              {copied === activeWallet.symbol ? (
                <>
                  <Check className="w-4 h-4 mr-1" />
                  Скопировано
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-1" />
                  Копировать
                </>
              )}
            </button>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4 mb-4">
            <code className="text-sm break-all">{activeWallet.address}</code>
          </div>
          
          {/* QR код (заглушка) */}
          <div className="flex justify-center mb-4">
            <div className="w-48 h-48 bg-white p-4 rounded-lg">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center rounded">
                <QrCode className="w-32 h-32 text-white" />
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Инструкция */}
      <div className="text-sm text-gray-400 border-t border-gray-800 pt-4">
        <p className="font-medium mb-2">Инструкция по пополнению:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Выберите криптовалюту выше</li>
          <li>Отправьте средства на указанный адрес</li>
          <li>После 2 подтверждений в сети баланс обновится</li>
          <li>Оплачивайте заказы из корзины</li>
        </ol>
        <p className="mt-3 text-yellow-400">
          ⚠️ В тестовом режиме баланс пополняется мгновенно
        </p>
      </div>
    </div>
  )
}
