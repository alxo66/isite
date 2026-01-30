"use client"

import Link from "next/link"
import { ShoppingCart, Search } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="mx-auto max-w-[1400px] px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-xl font-semibold">
          iPhone Store
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/catalog" className="hover:text-blue-600">Каталог</Link>
          <Link href="/delivery" className="hover:text-blue-600">Доставка</Link>
          <Link href="/contacts" className="hover:text-blue-600">Контакты</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Search size={20} />
          </button>
          <button className="relative p-2 hover:bg-gray-100 rounded-full">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 text-xs bg-blue-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          </button>
        </div>

      </div>
    </header>
  )
}
