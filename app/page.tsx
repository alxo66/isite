import { products } from '@/data/products'

export default function HomePage() {
  return (
    <main className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center my-12">
        Популярные модели
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <div
            key={product.id}
            className="rounded-2xl shadow-lg bg-white overflow-hidden"
          >
            <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-700" />

            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.title}</h3>

              <div className="text-yellow-400 text-sm mt-1">
                {'★'.repeat(Math.round(product.rating))}
                <span className="text-gray-500 ml-2">
                  ({product.reviews} отзывов)
                </span>
              </div>

              <div className="text-2xl font-bold mt-3">
                ${product.price}
              </div>

              <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                🛒 В корзину
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
