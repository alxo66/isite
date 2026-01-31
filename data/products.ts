export type Product = {
  id: string
  title: string
  price: number
  category: 'iphone' | 'ipad' | 'mac'
  rating: number
  reviews: number
}

export const products: Product[] = [
  // iPhone
  { id: 'iphone-15', title: 'iPhone 15', price: 799, category: 'iphone', rating: 5, reviews: 210 },
  { id: 'iphone-15-pro-max', title: 'iPhone 15 Pro Max', price: 1199, category: 'iphone', rating: 5, reviews: 342 },

  { id: 'iphone-16', title: 'iPhone 16', price: 899, category: 'iphone', rating: 5, reviews: 412 },
  { id: 'iphone-16e', title: 'iPhone 16e', price: 749, category: 'iphone', rating: 4.8, reviews: 128 },
  { id: 'iphone-16-plus', title: 'iPhone 16 Plus', price: 999, category: 'iphone', rating: 5, reviews: 189 },
  { id: 'iphone-16-pro', title: 'iPhone 16 Pro', price: 1199, category: 'iphone', rating: 5, reviews: 256 },
  { id: 'iphone-16-pro-max', title: 'iPhone 16 Pro Max', price: 1399, category: 'iphone', rating: 5, reviews: 342 },

  { id: 'iphone-17', title: 'iPhone 17', price: 999, category: 'iphone', rating: 5, reviews: 98 },
  { id: 'iphone-17-pro', title: 'iPhone 17 Pro', price: 1299, category: 'iphone', rating: 5, reviews: 64 },

  // iPad
  { id: 'ipad-air', title: 'iPad Air', price: 699, category: 'ipad', rating: 4.9, reviews: 143 },
  { id: 'ipad-pro', title: 'iPad Pro', price: 1099, category: 'ipad', rating: 5, reviews: 201 },

  // Mac
  { id: 'macbook-air-13', title: 'MacBook Air 13', price: 1299, category: 'mac', rating: 5, reviews: 87 },
  { id: 'macbook-pro-14-m5', title: 'MacBook Pro 14 M5', price: 1999, category: 'mac', rating: 5, reviews: 54 },
]
