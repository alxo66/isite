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
        </div>
      </div>
    </div>
  )
}
