'use client'

import { MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function TelegramWidget() {
  const [isVisible, setIsVisible] = useState(true)

  const openTelegram = () => {
    window.open('https://t.me/crypto_applestore_bot', '_blank')
  }

  // Скрываем кнопку на странице админки
  useEffect(() => {
    if (window.location.pathname.includes('/admin')) {
      setIsVisible(false)
    }
  }, [])

  if (!isVisible) return null

  return (
    <button
      onClick={openTelegram}
      className="fixed bottom-20 right-4 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-xl z-40 flex items-center justify-center hover:scale-110 transition-all duration-300 group"
      title="Написать в Telegram"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-16 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        Спросить в боте
      </span>
    </button>
  )
}
