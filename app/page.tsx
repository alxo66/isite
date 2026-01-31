import ProductCard from '@/components/ProductCard'
import WalletBalance from '@/components/WalletBalance'
import { Shield, Truck, Headphones, Bitcoin } from 'lucide-react'

const products = [
  { id: 1, name: 'iPhone 16 Pro Max', price: 1399, rating: 4.9, reviews: 342, imageColor: '#111' },
  { id: 2, name: 'iPhone 16 Pro', price: 1199, rating: 4.8, reviews: 256, imageColor: '#0A84FF' },
  { id: 3, name: 'iPhone 16 Plus', price: 999, rating: 4.7, reviews: 189, imageColor: '#FF2D55' },
  { id: 4, name: 'iPhone 16', price: 899, rating: 4.8, reviews: 412, imageColor: '#30D158' },
]

const features = [
  { icon: <Shield />, title: 'Гарантия 1 год', text: 'Официальная гарантия' },
  { icon: <Truck />, title: 'Быстрая доставка', text: '2–7 дней по РФ' },
  { icon: <Headphones />, title: 'Поддержка 24/7', text: 'Поможем с выбором' },
  { icon: <Bitcoin />, title: 'Крипто-платежи', text: 'Без комиссий' },
]

export default function HomePage() {
  return (
    <>
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">
          Купите новый iPhone за криптовалюту
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Bitcoin, Ethereum, USDT. Без банков и посредников.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a href="/catalog" className="btn-primary">Перейти в каталог</a>
          <a href="/delivery" className="btn-secondary">Как купить</a>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16 text-center">
        {features.map((f, i) => (
          <div key={i}>
            <div className="text-blue-500 text-3xl mb-2">{f.icon}</div>
            <h3 className="font-semibold">{f.title}</h3>
            <p className="text-sm text-gray-500">{f.text}</p>
          </div>
        ))}
      </section>

      <section className="py-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Популярные модели
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(p => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      <section className="py-16">
        <WalletBalance />
      </section>
    </>
  )
}
