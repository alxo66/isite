import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'
import { Filter } from 'lucide-react'

export default function CatalogPage() {
  // Группировка по категориям - исправленный код
  const categorySet = new Set<string>()
  products.forEach(product => categorySet.add(product.category))
  const categories = Array.from(categorySet)
  
  const inStockProducts = products.filter(p => p.inStock)
  const preOrderProducts = products.filter(p => !p.inStock)

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-4">Каталог техники Apple</h1>
            <p className="text-gray-600">
              {inStockProducts.length} товаров доступно для заказа
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select className="pl-10 pr-4 py-2 border rounded-lg bg-white">
                <option>Все категории</option>
                {categories.map(cat => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>
            
            <select className="px-4 py-2 border rounded-lg bg-white">
              <option>По популярности</option>
              <option>Сначала дешевле</option>
              <option>Сначала дороже</option>
              <option>По новизне</option>
            </select>
          </div>
        </div>
        
        {/* Категории */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button className="px-4 py-2 bg-apple-blue text-white rounded-full font-medium">
            Все товары
          </button>
          {categories.map(category => (
            <button 
              key={category}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full font-medium transition"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Сетка товаров */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {inStockProducts.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              imageColor={product.imageColor}
              rating={product.rating}
              reviews={product.reviews}
              description={product.description}
            />
          ))}
        </div>

        {/* Предзаказ секция */}
        {preOrderProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8">Предзаказ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {preOrderProducts.map((product) => (
                <div key={product.id} className="relative opacity-75">
                  <ProductCard 
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    imageColor={product.imageColor}
                    rating={product.rating}
                    reviews={product.reviews}
                    description={product.description}
                  />
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Предзаказ
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
