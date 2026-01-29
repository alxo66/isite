export default function Footer() {
  return (
    <footer className="bg-apple-black text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Колонка 1: О магазине */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold">iPhone Store</span>
            </div>
            <p className="text-gray-400 text-sm">
              Официальный магазин iPhone в России. 
              Гарантия 1 год, доставка по всей стране.
            </p>
          </div>

          {/* Колонка 2: Каталог */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Каталог</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">iPhone 15 Pro</a></li>
              <li><a href="#" className="hover:text-white">iPhone 15</a></li>
              <li><a href="#" className="hover:text-white">iPhone 14</a></li>
              <li><a href="#" className="hover:text-white">Аксессуары</a></li>
            </ul>
          </div>

          {/* Колонка 3: Поддержка */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Поддержка</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Доставка и оплата</a></li>
              <li><a href="#" className="hover:text-white">Гарантия</a></li>
              <li><a href="#" className="hover:text-white">Контакты</a></li>
            </ul>
          </div>

          {/* Колонка 4: Криптовалюты */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Принимаем к оплате</h3>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {['Bitcoin', 'Ethereum', 'USDT', 'Ton', 'BNB', 'Solana'].map((crypto) => (
                <div key={crypto} className="bg-gray-900 rounded-lg p-2 text-center">
                  <span className="text-xs">{crypto}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} iPhone Store. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
