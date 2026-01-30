"use client";

import Link from "next/link";
import { ShoppingCart, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight hover:opacity-80"
        >
          iPhone Store
        </Link>

        {/* Navigation */}
        <nav className="hidden gap-8 md:flex">
          <Link
            href="/catalog"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Каталог
          </Link>
          <Link
            href="/delivery"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Доставка
          </Link>
          <Link
            href="/contacts"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Контакты
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-black"
            aria-label="Поиск"
          >
            <Search size={20} />
          </button>

          <Link
            href="/cart"
            className="relative rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-black"
          >
            <ShoppingCart size={20} />

            {/* Counter (пока статический) */}
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-semibold text-white">
              1
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
