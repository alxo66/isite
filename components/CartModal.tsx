'use client'

import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, totalItems, totalPrice, removeFromCart, updateQuantity, clearCart } = useCart()

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
          
          {/* Панель корзины */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full md:w-96 bg-white z-50 shadow-2xl"
          >
            <div className="h-full flex flex-col">
              {/* Заголовок */}
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center space-x-3">
                  <ShoppingBag className="w-6 h-6" />
                  <h2 className="text-xl font-bold">Корзина</h2>
                  <span className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full">
                    {totalItems} товар{totalItems !== 1 ? 'а' : ''}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Список товаров */}
              <div className="flex-grow overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                    <p className="text-gray-500">Ваша корзина пуста</p>
                    <button
                      onClick={onClose}
                      className="mt-4 btn-primary"
                    >
                      Перейти к покупкам
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-4 p-4 border rounded-lg"
                      >
                        {/* Цветной индикатор */}
                        <div
                          className="w-12 h-12 rounded-lg"
                          style={{ backgroundColor: item.imageColor }}
                        />
                        
                        {/* Информация о товаре */}
                        <div className="flex-grow">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-gray-600">${item.price}</p>
                        </div>
                        
                        {/* Управление количеством */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center border rounded"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border rounded"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        
                        {/* Удалить */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Итого и кнопки */}
              {items.length > 0 && (
                <div className="border-t p-6 space-y-4">
                  <div className="flex justify-between text-lg">
                    <span>Итого:</span>
                    <span className="font-bold">${totalPrice}</span>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button
                      onClick={clearCart}
                      className="flex-1 btn-secondary"
                    >
                      Очистить
                    </button>
                    <Link
                      href="/checkout"
                      onClick={onClose}
                      className="flex-1 btn-primary text-center"
                    >
                      Оформить заказ
                    </Link>
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
