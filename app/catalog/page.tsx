import ProductCard from '@/components/ProductCard'
import { Filter } from 'lucide-react'

// Временные данные товаров (прямо в файле)
const products = [
  {
    id: 1,
    name: "iPhone 16 Pro Max",
    category: "iPhone",
    price: 1399,
    oldPrice: 1499,
    description: "Самый мощный iPhone с технологией Apple Intelligence",
    imageColor: "#1D1D1F",
    rating: 4.9,
    reviews: 342,
    inStock: true
  },
  {
    id: 2,
    name: "iPhone 16 Pro",
    category: "iPhone",
    price: 1199,
    description: "Профессиональная камера в компактном корпусе",
    imageColor: "#007AFF",
    rating: 4.8,
    reviews: 256,
    inStock: true
  },
  {
    id: 3,
    name: "iPhone 16 Plus",
    category: "iPhone",
    price: 999,
    description: "Большой дисплей и долгий срок работы батареи",
    imageColor: "#FF2D55",
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: 4,
    name: "iPhone 16",
    category: "iPhone",
    price: 899,
    description: "Сбалансированный iPhone для большинства пользователей",
    imageColor: "#32D74B",
    rating: 4.7,
    reviews: 412,
    inStock: true
  },
  {
    id: 5,
    name: "iPhone 15 Pro Max",
    category: "iPhone",
    price: 1099,
    oldPrice: 1299,
    description: "Титановый дизайн и кнопка действия",
    imageColor: "#5E5E5E",
    rating: 4.8,
    reviews: 567,
    inStock: true
  },
  {
    id: 6,
    name: "Apple MacBook Air 13 M5",
    category: "Mac",
    price: 1299,
    description: "Невероятно тонкий и мощный ноутбук",
    imageColor: "#A2AAAD",
    rating: 4.9,
    reviews: 234,
    inStock: true
  },
  {
    id: 7,
    name: "iPad Pro M4",
    category: "iPad",
    price: 1099,
    description: "Суперкомпьютер для творчества",
    imageColor: "#D1D1D6",
    rating: 4.8,
    reviews: 156,
    inStock: true
  },
  {
    id: 8,
    name: "iPad Air",
    category: "iPad",
    price: 799,
    description: "Мощный. Разносторонний. Невероятно портативный.",
    imageColor: "#BF5AF2",
    rating: 4.7,
    reviews: 289,
    inStock: true
  }
]

export default function CatalogPage() {
  // Используем простой способ получения уникальных категорий
  const categories = [] as string[];
  const categorySet = new Set<string>();
  
  products.forEach(product => {
    categorySet.add(product.category);
  });
  
  categorySet.forEach(category => {
    categories.push(category);
  });
  
  const inStockProducts = products.filter(p => p.inStock)

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
      </div>
    </div>
  )
}
