// data/products.ts

export interface Product {
  id: string
  title: string
  description: string
  price: number
  image: string
}

export const products: Product[] = [
  {
    id: 'iphone-16-pro-max',
    title: 'iPhone 16 Pro Max',
    description: '6.9" OLED, A18 Pro, 1TB, Titanium корпус',
    price: 1399,
    image: '/products/iphone-16-pro-max.jpg',
  },
  {
    id: 'iphone-16-pro',
    title: 'iPhone 16 Pro',
    description: '6.3" OLED, A18 Pro, 512GB',
    price: 1199,
    image: '/products/iphone-16-pro.jpg',
  },
  {
    id: 'iphone-16-plus',
    title: 'iPhone 16 Plus',
    description: '6.7" OLED, A18, 256GB',
    price: 999,
    image: '/products/iphone-16.jpg',
  },
  {
    id: 'iphone-16',
    title: 'iPhone 16',
    description: '6.1" OLED, A18, 128GB',
    price: 899,
    image: '/products/iphone-16.jpg',
  },
]
