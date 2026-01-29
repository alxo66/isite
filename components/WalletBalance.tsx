'use client'

import { Wallet, Copy, Check, Plus } from 'lucide-react'
import { useState, useEffect } from 'react'
import QRCode from 'qrcode.react'

interface CryptoWallet {
  symbol: string
  name: string
  address: string
  network: string
  qrSize?: number
}

export default function WalletBalance() {
  const [balance, setBalance] = useState(0.00)
  const [copied, setCopied] = useState<string | null>(null)
  const [activeCrypto, setActiveCrypto] = useState('BTC')
  
  const wallets: CryptoWallet[] = [
    { 
      symbol: 'BTC', 
      name: 'Bitcoin', 
      address: 'bc1qlgf034j5nhqh0ltsqnhrepchlxwlykrtujvupq',
      network: 'Bitcoin Mainnet',
      qrSize: 180
    },
    { 
      symbol: 'ETH', 
      name: 'Ethereum', 
      address: '0x5Fc25f19E18Dfc7d19595cB7d1eB0D0605b9A3FA',
      network: 'Ethereum ERC20',
      qrSize: 180
    },
    { 
      symbol: 'USDT', 
      name: 'Tether', 
      address: 'TMM1xGXxAY9R66hGPxKNfxo81KrmdyrszE',
      network: 'TRC20 (Tron)',
      qrSize: 180
    },
    { 
      symbol: 'TON', 
      name: 'Toncoin', 
      address: 'UQD-XSYf6P-NyjbSJYDHsgHnk0e5CiJQ2-NCZddro_5-c8B4',
      network: 'TON',
      qrSize: 180
    },
  ]

  useEffect(() => {
    const savedBalance = localStorage.getItem('wallet-balance')
    if (savedBalance) {
      setBalance(parseFloat(savedBalance))
    }
  }, [])

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
      
      <div className="mb-8">
        <p className="text-gray-400 mb-2">Баланс в долларах</p>
        <p className="text-4xl font-bold">${balance.toFixed(2)}</p>
        <p className="text-sm text-gray-400 mt-2">
          Курсы обновляются автоматически
        </p>
      </div>
      
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
        </div>
      </div>
      
      {activeWallet && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-gray-400">Адрес {activeWallet.name}</p>
              <p className="text-xs text-gray-500">{activeWallet.network}</p>
            </div>
            <button
              onClick={() => copyAddress(activeWallet.address, activeWallet.symbol)}
              className="flex items-center text-blue-400 hover:text-blue-300 text-sm"
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
          
          <div className="flex flex-col items-center mb-4">
            <div className="w-64 h-64 bg-white p-4 rounded-lg mb-3">
              <QRCode 
                value={activeWallet.address}
                size={activeWallet.qrSize || 180}
                level="H"
                includeMargin={true}
                fgColor="#000000"
                bgColor="#FFFFFF"
              />
            </div>
            <p className="text-sm text-gray-400 text-center">
              Отсканируйте QR-код для оплаты
            </p>
          </div>
        </div>
      )}
      
      <div className="text-sm text-gray-400 border-t border-gray-800 pt-4">
        <p className="font-medium mb-2">📌 Важно:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Отправляйте только {activeCrypto} на этот адрес</li>
          <li>Минимальная сумма пополнения: $10</li>
          <li>Баланс обновляется после 2 подтверждений</li>
          <li>Для USDT используйте только сеть TRC20</li>
        </ul>
      </div>
    </div>
  )
}
