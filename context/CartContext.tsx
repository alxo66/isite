'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  imageColor: string
}

interface CartContextType {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  // Загружаем корзину из localStorage при инициализации
  useEffect(() => {
    const savedCart = localStorage.getItem('iphone-store-cart')
    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
    setIsInitialized(true)
  }, [])

  // Сохраняем корзину в localStorage при изменении
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('iphone-store-cart', JSON.stringify(items))
    }
  }, [items, isInitialized])

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(i => i.id === item.id)
      
      if (existingItem) {
        return currentItems.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      } else {
        return [...currentItems, { ...item, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (id: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id)
      return
    }
    
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <CartContext.Provider value={{
      items,
      totalItems,
      totalPrice,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
