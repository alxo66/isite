'use client'

import { Search, X, Clock } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const popularSearches = [
  'iPhone 15 Pro Max',
  'iPhone 15 Pro',
  'iPhone 15',
  'iPhone 14 Pro',
  'iPhone 13',
  'AirPods Pro',
  'Apple Watch'
]

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/catalog?search=${encodeURIComponent(query)}`)
      onClose()
    }
  }

  const handlePopularSearch = (searchTerm: string) => {
    router.push(`/catalog?search=${encodeURIComponent(searchTerm)}`)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Затемнение фона */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />
          
          {/* Панель поиска */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bg-white z-50 shadow-2xl"
          >
            <div className="container mx-auto px-4 py-4">
              {/* Поле поиска */}
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Поиск iPhone, аксессуаров..."
                  className="w-full pl-12 pr-12 py-4 text-lg border rounded-xl focus:ring-2 focus:ring-apple-blue focus:border-transparent"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  <X className="w-5 h-5" />
                </button>
              </form>

              {/* Популярные запросы */}
              {!query && (
                <div className="mt-8">
                  <div className="flex items-center text-gray-500 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="font-medium">Популярные запросы</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handlePopularSearch(search)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Результаты поиска (заглушка) */}
              {query && (
                <div className="mt-8">
                  <p className="text-gray-500 mb-4">
                    Результаты для: <span className="font-semibold">{query}</span>
                  </p>
                  <div className="space-y-2">
                    <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <p className="font-medium">По запросу "{query}" ничего не найдено</p>
                      <p className="text-sm text-gray-500">Попробуйте другой запрос</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
