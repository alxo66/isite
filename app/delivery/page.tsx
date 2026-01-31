export default function DeliveryPage() {
  return (
    <section className="py-20 container mx-auto px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Доставка и оплата</h1>

      <ul className="space-y-4 text-gray-700">
        <li>🚚 Курьер — 2–3 дня</li>
        <li>📦 Самовывоз — 1–2 дня</li>
        <li>📮 Почта РФ — 5–10 дней</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">
        Оплата криптовалютой
      </h2>

      <ol className="list-decimal pl-6 space-y-2">
        <li>Оформляете заказ</li>
        <li>Получаете адрес кошелька</li>
        <li>Оплачиваете</li>
        <li>Получаете трек-номер</li>
      </ol>
    </section>
  )
}
