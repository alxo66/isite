export type Product = {
  id: string
  title: string
  subtitle: string
  price: number
  image: string
  category: 'iphone' | 'ipad' | 'mac'
}

export const products: Product[] = [
  {
    id: 'iphone-15',
    title: 'iPhone 15',
    subtitle: '6.1″, A16 Bionic',
    price: 799,
    image: '/products/iphone-15.jpg',
    category: 'iphone',
  },
  {
    id: 'iphone-15-pro',
    title: 'iPhone 15 Pro',
    subtitle: '6.1″, A17 Pro',
    price: 999,
    image: '/products/iphone-15-pro.jpg',
    category: 'iphone',
  },
  {
    id: 'iphone-15-pro-max',
    title: 'iPhone 15 Pro Max',
    subtitle: '6.7″, A17 Pro',
    price: 1199,
    image: '/products/iphone-15-pro-max.jpg',
    category: 'iphone',
  },
  {
    id: 'iphone-16',
    title: 'iPhone 16',
    subtitle: '6.1″, A18',
    price: 899,
    image: '/products/iphone-16.jpg',
    category: 'iphone',
  },
  {
    id: 'iphone-16-pro',
    title: 'iPhone 16 Pro',
    subtitle: '6.3″, A18 Pro',
    price: 1099,
    image: '/products/iphone-16-pro.jpg',
    category: 'iphone',
  },
  {
    id: 'iphone-16-pro-max',
    title: 'iPhone 16 Pro Max',
    subtitle: '6.9″, A18 Pro',
    price: 1299,
    image: '/products/iphone-16-pro-max.jpg',
    category: 'iphone',
  },
  {
    id: 'ipad-air-m2',
    title: 'iPad Air',
    subtitle: 'M2, 11″',
    price: 599,
    image: '/products/ipad-air.jpg',
    category: 'ipad',
  },
  {
    id: 'ipad-pro-m4',
    title: 'iPad Pro',
    subtitle: 'M4, OLED',
    price: 999,
    image: '/products/ipad-pro.jpg',
    category: 'ipad',
  },
  {
    id: 'macbook-air-13-m3',
    title: 'MacBook Air 13″',
    subtitle: 'Apple M3',
    price: 1099,
    image: '/products/macbook-air-13.jpg',
    category: 'mac',
  },
  {
    id: 'macbook-pro-14-m3',
    title: 'MacBook Pro 14″',
    subtitle: 'Apple M3 Pro',
    price: 1999,
    image: '/products/macbook-pro-14.jpg',
    category: 'mac',
  },
]
