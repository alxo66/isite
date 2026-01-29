'use client'

import { ShoppingCart, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useCart } from '@/context/CartContext'

interface ProductCardProps {
  id: number
  name: string
  price: number
  oldPrice?: number
  imageColor: string
  rating: number
  reviews: number
  description?: string
}

export default function ProductCard({ 
  id, 
  name, 
  price, 
  oldPrice, 
  imageColor, 
  rating, 
  reviews,
  description 
}: ProductCardProps) {
  
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      imageColor
    })
  }

  return (
    <motion.div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
      whileHover={{ y: -5 }}
    >
      {/* Изображение товара */}
      <div 
        className="h-64 flex items-center justify-center"
        style={{ backgroundColor: imageColor }}
      >
        <div className="relative w-48 h-48">
          {/* Здесь будет реальное изображение iPhone */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black rounded-3xl"></div>
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-full"></div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-900 rounded-full"></div>
        </div>
      </div>

      {/* Информация о товаре */}
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        
        {/* Рейтинг */}
        <div className="flex items-center mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">({reviews} отзывов)</span>
        </div>

        {/* Цены */}
        <div className="mb-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold">${price}</span>
            {oldPrice && (
              <span className="text-gray-400 line-through ml-3">${oldPrice}</span>
            )}
          </div>
        </div>

        {/* Описание */}
        {description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>
        )}

        {/* Кнопка */}
        <button 
          onClick={handleAddToCart}
          className="w-full btn-primary flex items-center justify-center"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          В корзину
        </button>
      </div>
    </motion.div>
  )
}
