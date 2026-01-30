'use client'

import { ShoppingCart, User, Search, Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Мы оставили эти стейты, так как они понадобятся для модальных окон позже
  const [isCartOpen, setIsCartOpen] = useState(false) 
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            {/* Логотип: Apple-style градиент */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-black rounded-lg transition-transform group-hover:scale-110"></div>
              <span className="text-2xl font-bold tracking-tight text-black">iPhone Store</span>
            </Link>

            {/* Десктопная навигация */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-black transition">Главная</Link>
              <Link href="/catalog" className="text-sm font-medium text-gray-600 hover:text-black transition">Каталог</Link>
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-black transition">О нас</Link>
              <Link href="/delivery" className="text-sm font-medium text-gray-600 hover:text-black transition">Доставка</Link>
            </nav>

            {/* Иконки действий */}
            <div className="flex items-center space-x-5">
              {/* Поиск (пока просто кнопка) */}
              <button 
                className="p-2 text-gray-600 hover:text-black transition"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Поиск"
              >
                <Search className="w-5 h-5" />
              </button>
              
              {/* Профиль (Линк на бота) */}
              <button 
                className="p-2 text-gray-600 hover:text-black transition"
                onClick={() => window.open('https://t.me/crypto_applestore_bot', '_blank')}
                aria-label="Профиль в Telegram"
              >
                <User className="w-5 h-5" />
              </button>
              
              {/* Корзина с индикатором */}
              <button 
                className="relative p-2 text-gray-600 hover:text-black transition"
                onClick={() => setIsCartOpen(!isCartOpen)}
                aria-label="Корзина"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute top-1 right-1 bg-blue-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-in fade-in zoom-in">
                    {totalItems}
                  </span>
                )}
              </button>
              
              {/* Бургер-меню (Мобильное) */}
              <button 
                className="md:hidden p-2 text-gray-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Мобильное меню (выпадающее) */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t bg-white space-y-2 animate-in slide-in-from-top-2">
              <Link href="/" className="block px-4 py-2 font-medium text-gray-700 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Главная</Link>
              <Link href="/catalog" className="block px-4 py-2 font-medium text-gray-700 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Каталог</Link>
              <Link href="/about" className="block px-4 py-2 font-medium text-gray-700 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>О нас</Link>
              <Link href="/delivery" className="block px-4 py-2 font-medium text-gray-700 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Доставка</Link>
            </div>
          )}
        </div>
      </header>

      {/* Кнопка Админ-панели через Link (правильный способ Next.js) */}
      <Link
        href="/admin"
        className="fixed bottom-6 right-6 w-12 h-12 bg-black text-white rounded-full shadow-2xl z-40 flex items-center justify-center hover:scale-110 transition-all duration-300"
        title="Админ-панель"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066-1.543.94-3.31-.826-2.37-2.37-1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </Link>
    </>
  )
}
