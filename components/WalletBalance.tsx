'use client'

import { Wallet, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function WalletBalance() {
  const [balance, setBalance] = useState(0.00)
  const [copied, setCopied] = useState(false)
  
  const walletAddress = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa' // Пример BTC адреса
  
  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-6">
      <div className="flex items-center mb-6">
        <Wallet className="w-6 h-6 mr-3" />
        <h3 className="text-xl font-bold">Ваш кошелек</h3>
      </div>
      
      {/* Баланс */}
      <div className="mb-8">
        <p className="text-gray-400 mb-2">Текущий баланс</p>
        <p className="text-4xl font-bold">${balance.toFixed(2)}</p>
      </div>
      
      {/* Адрес для пополнения */}
      <div className="mb-6">
        <p className="text-gray-400 mb-2">Адрес для пополнения (Bitcoin)</p>
        <div className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
          <code className="text-sm truncate mr-3">{walletAddress}</code>
          <button 
            onClick={copyAddress}
            className="flex items-center text-blue-400 hover:text-blue-300"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>
      
      {/* Инструкция */}
      <div className="text-sm text-gray-400">
        <p className="mb-1">1. Отправьте BTC на адрес выше</p>
        <p className="mb-1">2. Средства зачислятся в течение 10 минут</p>
        <p>3. Оплачивайте заказы из корзины</p>
      </div>
    </div>
  )
}
