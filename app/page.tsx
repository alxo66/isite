import ProductCard from '@/components/ProductCard'
import { products } from '@/app/data/products'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      {/* HERO */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Купите новый iPhone за криптовалюту
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Bitcoin, Ethereum, USDT. Без банков и посредников.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/catalog"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Перейти в каталог
          </a>
          <button className="border px-6 py-3 rounded-xl">
            Как купить
          </button>
        </div>
      </section>

      {/* POPULAR */}
      <section className="py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Популярные модели
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
