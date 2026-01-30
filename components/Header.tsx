'use client'

import { ShoppingCart, User, Search, Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import CartModal from '@/components/CartModal'
import { useCart } from '@/context/CartContext'
import SearchModal from '@/components/SearchModal'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Логотип */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
              <span className="text-2xl font-bold">iPhone Store</span>
            </Link>

            {/* Навигация для десктопа */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="font-medium hover:text-apple-blue transition">Главная</Link>
              <Link href="/catalog" className="font-medium hover:text-apple-blue transition">Каталог</Link>
              <Link href="/about" className="font-medium hover:text-apple-blue transition">О нас</Link>
              <Link href="/delivery" className="font-medium hover:text-apple-blue transition">Доставка</Link>
            </nav>

            {/* Иконки действий */}
            <div className="flex items-center space-x-6">
              <button 
                className="hidden md:block"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button 
                className="relative"
                onClick={() => window.open('https://t.me/crypto_applestore_bot', '_blank')}
              >
                <User className="w-5 h-5" />
              </button>
              
              <button 
                className="relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Мобильное меню */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="font-medium py-2" onClick={() => setIsMenuOpen(false)}>Главная</Link>
                <Link href="/catalog" className="font-medium py-2" onClick={() => setIsMenuOpen(false)}>Каталог</Link>
                <Link href="/about" className="font-medium py-2" onClick={() => setIsMenuOpen(false)}>О нас</Link>
                <Link href="/delivery" className="font-medium py-2" onClick={() => setIsMenuOpen(false)}>Доставка</Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Модальное окно корзины */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
      {/* Модальное окно поиска */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* Скрытая кнопка для админки */}
      <button
        onClick={() => window.location.href = '/admin'}
        className="fixed bottom-4 right-4 w-12 h-12 bg-apple-blue text-white rounded-full shadow-lg z-40 flex items-center justify-center hover:bg-blue-600 transition"
        title="Админ-панель"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
    </>
  )
}
