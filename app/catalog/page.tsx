import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

export default function CatalogPage() {
  return (
    <section className="py-20 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-2">Каталог Apple</h1>
      <p className="text-gray-500 mb-8">
        {products.length} товаров доступно
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(p => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  )
}
