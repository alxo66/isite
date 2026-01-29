import ProductCard from '@/components/ProductCard'
import WalletBalance from '@/components/WalletBalance'
import { Shield, Truck, Headphones, Bitcoin } from 'lucide-react'

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 1199,
    oldPrice: 1299,
    imageColor: "#F5F5F7",
    rating: 4.9,
    reviews: 245,
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 999,
    imageColor: "#E8E8ED",
    rating: 4.8,
    reviews: 189,
  },
  {
    id: 3,
    name: "iPhone 15",
    price: 799,
    imageColor: "#F5F5F7",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "iPhone 14 Pro",
    price: 899,
    oldPrice: 999,
    imageColor: "#E8E8ED",
    rating: 4.8,
    reviews: 312,
  },
]

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Гарантия 1 год",
    description: "Официальная гарантия от производителя"
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Быстрая доставка",
    description: "По всей России за 2-7 дней"
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Поддержка 24/7",
    description: "Поможем с выбором и настройкой"
  },
  {
    icon: <Bitcoin className="w-8 h-8" />,
    title: "Крипто-платежи",
    description: "Без комиссий и посредников"
  },
]

export default function Home() {
  return (
    <>
      {/* Герой-секция */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Купите новый iPhone<br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  за криптовалюту
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Самый современный магазин iPhone в России. 
                Платите Bitcoin, Ethereum, USDT и другими криптовалютами.
                Без банков, без комиссий.
              </p>
              <div className="flex space-x-4">
                <button className="btn-primary">
                  Перейти в каталог
                </button>
                <button className="btn-secondary">
                  Как купить
                </button>
              </div>
            </div>
            
            {/* Графический элемент */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-64 h-64 bg-gradient-to-b from-gray-800 to-black rounded-3xl relative">
                    {/* Стилизованный iPhone */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-48 h-6 bg-gray-900 rounded-full"></div>
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-400">
                  Процесс оплаты занимает 2 минуты
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-apple-gray mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Популярные товары */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные модели</h2>
              <p className="text-gray-600">Выберите свой новый iPhone</p>
            </div>
            <button className="btn-secondary hidden md:block">
              Весь каталог
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Кошелек + Как купить */}
      <section className="py-20 bg-gradient-to-b from-white to-apple-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Кошелек */}
            <WalletBalance />
            
            {/* Инструкция */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Как купить за 3 шага</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-apple-blue font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Пополните баланс</h3>
                    <p className="text-gray-600">
                      Отправьте криптовалюту на адрес вашего кошелька в системе. 
                      Баланс обновится после 3 подтверждений в сети.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-apple-blue font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Выберите товар</h3>
                    <p className="text-gray-600">
                      Добавьте iPhone в корзину, укажите адрес доставки 
                      и контактные данные.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-apple-blue font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Оплатите заказ</h3>
                    <p className="text-gray-600">
                      Оплатите заказ с баланса кошелька. 
                      Мы отправим трек-номер для отслеживания сразу после оплаты.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
