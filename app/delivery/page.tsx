export default function DeliveryPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Доставка и оплата</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6">Способы доставки</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-lg mb-3">Курьерская доставка</h3>
                <p className="text-gray-600 mb-4">До двери в любом городе России</p>
                <p className="font-bold">Срок: 2-3 дня</p>
                <p className="font-bold text-apple-blue">$19</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-lg mb-3">Самовывоз</h3>
                <p className="text-gray-600 mb-4">Из пунктов выдачи в 120 городах</p>
                <p className="font-bold">Срок: 1-2 дня</p>
                <p className="font-bold text-apple-blue">$9</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-lg mb-3">Почта России</h3>
                <p className="text-gray-600 mb-4">Доставка в отделение</p>
                <p className="font-bold">Срок: 5-10 дней</p>
                <p className="font-bold text-apple-blue">$15</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-6">Оплата криптовалютой</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-4">Как это работает:</h3>
              <ol className="list-decimal pl-6 space-y-3">
                <li>Добавьте товары в корзину и оформите заказ</li>
                <li>Выберите способ оплаты "Криптовалюта"</li>
                <li>Мы отправим вам адрес кошелька для оплаты</li>
                <li>Отправьте нужную сумму в выбранной криптовалюте</li>
                <li>После 3 подтверждений в сети заказ будет обработан</li>
                <li>Вы получите трек-номер для отслеживания</li>
              </ol>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-6">Поддерживаемые криптовалюты</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {['Bitcoin (BTC)', 'Ethereum (ETH)', 'Tether (USDT)', 'Toncoin (TON)', 'BNB (BNB)', 'Solana (SOL)'].map((crypto) => (
                <div key={crypto} className="bg-white p-4 rounded-lg text-center border">
                  <span className="font-medium">{crypto}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
