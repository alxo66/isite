import { MessageCircle } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">О нашем магазине</h1>
        <div className="space-y-6 text-lg">
          <p>
            iPhone Store — это первый в России магазин, специализирующийся на продаже 
            оригинальной продукции Apple с возможностью оплаты криптовалютой.
          </p>
          <p>
            Мы работаем с 2020 года и за это время отправили более 10 000 заказов 
            по всей стране. Наши клиенты ценят нас за надежность, конфиденциальность 
            и современный подход к оплате.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Наши преимущества</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>100% оригинальная продукция Apple с официальной гарантией</li>
            <li>Анонимная оплата криптовалютой (Bitcoin, Ethereum, USDT и другие)</li>
            <li>Быстрая доставка по всей России (2-7 дней)</li>
            <li>Поддержка 24/7 в Telegram и по email</li>
            <li>Низкие цены за счет отсутствия банковских комиссий</li>
          </ul>

          {/* Telegram поддержка */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Telegram поддержка</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">@crypto_applestore_bot</h3>
                  <p className="text-gray-600">Наш официальный Telegram-бот</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold mb-2">📞 Поддержка 24/7</h4>
                  <p className="text-sm text-gray-600">Отвечаем в течение 5 минут</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold mb-2">💬 Консультации</h4>
                  <p className="text-sm text-gray-600">Поможем с выбором техники</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold mb-2">📱 Статус заказа</h4>
                  <p className="text-sm text-gray-600">Отслеживайте заказ в реальном времени</p>
                </div>
              </div>
              
              <button
                onClick={() => window.open('https://t.me/crypto_applestore_bot', '_blank')}
                className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
              >
                Открыть в Telegram
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
