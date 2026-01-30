"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from '@/context/CartContext'
import TelegramWidget from '@/components/TelegramWidget'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <TelegramWidget />
      </div>
    </CartProvider>
  )
}
