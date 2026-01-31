export const metadata = {
  title: 'Доставка | iPhone Store',
}

export default function DeliveryPage() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Доставка</h1>

      <p className="mb-4">
        Мы доставляем технику Apple по всей России.
      </p>

      <ul className="list-disc pl-6 space-y-3">
        <li>📦 Срок доставки: 2–7 дней</li>
        <li>🚚 Курьерская доставка и пункты выдачи</li>
        <li>🔒 Надёжная упаковка</li>
        <li>📍 Трек-номер после отправки</li>
      </ul>

      <p className="mt-6 text-gray-600">
        После оформления заказа менеджер свяжется с вами для подтверждения.
      </p>
    </section>
  )
}
