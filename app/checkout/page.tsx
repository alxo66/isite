'use client'

import { useState, useEffect } from 'react'
import { useCart } from '@/context/CartContext'
import { ArrowLeft, Shield, CreditCard, Truck, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { OrderManager } from '@/lib/orders'
import { useRouter } from 'next/navigation'
import { sendOrderToTelegram } from '@/lib/telegram'

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderSuccess, setOrderSuccess] = useState(false)
  const [orderId, setOrderId] = useState<string>('')
  const [cryptoAddress, setCryptoAddress] = useState<string>('')
  const router = useRouter()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    deliveryMethod: 'courier',
    paymentMethod: 'wallet'
  })

  // Автозаполнение для теста
  useEffect(() => {
    if (typeof window !== 'undefined' && !formData.name) {
      setFormData({
        name: 'Иван Иванов',
        email: 'test@example.com',
        phone: '+79991234567',
        address: 'ул. Примерная, д. 123',
        city: 'Москва',
        postalCode: '123456',
        deliveryMethod: 'courier',
        paymentMethod: 'crypto'
      })
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (step < 3) {
      setStep(step + 1)
      return
    }

    setIsSubmitting(true)

    try {
      // Создаем заказ
      const order = OrderManager.createOrder({
        items: items.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        total: totalPrice + 19,
        customerName: formData.name,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        shippingAddress: `${formData.city}, ${formData.address}`,
        deliveryMethod: formData.deliveryMethod === 'courier' ? 'Курьер' : 
                      formData.deliveryMethod === 'pickup' ? 'Самовывоз' : 'Почта России',
        paymentMethod: formData.paymentMethod === 'wallet' ? 'Баланс кошелька' : 'Криптовалюта'
      })

      // Отправляем уведомление в Telegram
try {
  await sendOrderToTelegram({
    orderId: order.id,
    customerName: formData.name,
    customerPhone: formData.phone,
    customerEmail: formData.email,
    items: items.map(item => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price
    })),
    total: totalPrice + (
      formData.deliveryMethod === 'courier' ? 19 : 
      formData.deliveryMethod === 'pickup' ? 9 : 15
    ),
    paymentMethod: formData.paymentMethod === 'wallet' ? 'Баланс кошелька' : 'Криптовалюта',
    shippingAddress: `${formData.city}, ${formData.address}`,
    status: 'Новый'
  })
} catch (error) {
  console.error('Не удалось отправить в Telegram:', error)
}
      
      // Генерируем крипто-адрес для оплаты
      if (formData.paymentMethod === 'crypto') {
        const wallets = [
          'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
          '0x742d35Cc6634C0532925a3b844Bc9e0F1aB2B3c8'
        ]
        setCryptoAddress(wallets[Math.floor(Math.random() * wallets.length)])
      }

      setOrderId(order.id)
      setOrderSuccess(true)
      clearCart()

      // Сохраняем заказ в localStorage для админ-панели
      localStorage.setItem('last-order-id', order.id)

    } catch (error) {
      console.error('Ошибка при создании заказа:', error)
      alert('Произошла ошибка. Пожалуйста, попробуйте снова.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (orderSuccess) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Заказ оформлен!</h1>
            <p className="text-gray-600 mb-6">
              Номер вашего заказа: <span className="font-bold">{orderId}</span>
            </p>
            
            {formData.paymentMethod === 'crypto' ? (
              <div className="mb-8">
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <AlertCircle className="w-6 h-6 text-yellow-600 mr-2" />
                    <h3 className="font-bold text-lg">Оплатите криптовалютой</h3>
                  </div>
                  
                  <div className="space-y-4 text-left">
                    <div>
                      <p className="text-gray-600 mb-2">Адрес для оплаты (Bitcoin):</p>
                      <div className="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm break-all">
                        {cryptoAddress}
                      </div>
                      <button
                        onClick={() => navigator.clipboard.writeText(cryptoAddress)}
                        className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                      >
                        Скопировать адрес
                      </button>
                    </div>
                    
                    <div>
                      <p className="text-gray-600 mb-2">Сумма к оплате:</p>
                      <p className="text-2xl font-bold">${totalPrice + 19} USD</p>
                      <p className="text-sm text-gray-500">
                        ≈ {((totalPrice + 19) / 43000).toFixed(8)} BTC
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  После получения 2 подтверждений в сети мы отправим вам трек-номер для отслеживания.
                </p>
              </div>
            ) : (
              <div className="mb-8">
                <p className="text-gray-600 mb-6">
                  Спасибо за заказ! Мы свяжемся с вами в течение 30 минут для подтверждения.
                </p>
              </div>
            )}
            
            <div className="space-y-4">
              <Link
                href="/"
                className="inline-block w-full md:w-auto btn-primary"
              >
                Вернуться в магазин
              </Link>
              <button
                onClick={() => window.print()}
                className="inline-block w-full md:w-auto btn-secondary"
              >
                Распечатать квитанцию
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Заголовок и шаги */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-apple-blue mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Вернуться к покупкам
          </Link>
          
          <h1 className="text-3xl font-bold mb-8">Оформление заказа</h1>
          
          {/* Индикатор шагов */}
          <div className="flex items-center justify-between mb-8">
            {[
              { number: 1, label: 'Данные', icon: <Shield className="w-4 h-4" /> },
              { number: 2, label: 'Доставка', icon: <Truck className="w-4 h-4" /> },
              { number: 3, label: 'Оплата', icon: <CreditCard className="w-4 h-4" /> }
            ].map((item) => (
              <div key={item.number} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  step >= item.number ? 'bg-apple-blue text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {item.icon}
                </div>
                <span className={`text-sm ${step >= item.number ? 'font-medium' : 'text-gray-500'}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Форма */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-bold mb-4">Контактные данные</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя и фамилия *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-apple-blue focus:border-transparent"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-apple-blue focus:border-transparent"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-apple-blue focus:border-transparent"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Город *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-apple-blue focus:border-transparent"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Адрес доставки *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-apple-blue focus:border-transparent"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-bold mb-4">Способ доставки</h2>
                  
                  <div className="space-y-4">
                    {[
                      { id: 'courier', title: 'Курьером', desc: 'До двери, 2-3 дня', price: '$19' },
                      { id: 'pickup', title: 'Самовывоз', desc: 'Из пункта выдачи, 1-2 дня', price: '$9' },
                      { id: 'post', title: 'Почта России', desc: 'До отделения, 5-10 дней', price: '$15' }
                    ].map((method) => (
                      <label key={method.id} className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center space-x-4">
                          <input
                            type="radio"
                            name="delivery"
                            value={method.id}
                            checked={formData.deliveryMethod === method.id}
                            onChange={(e) => setFormData({...formData, deliveryMethod: e.target.value})}
                            className="text-apple-blue"
                          />
                          <div>
                            <div className="font-medium">{method.title}</div>
                            <div className="text-sm text-gray-500">{method.desc}</div>
                          </div>
                        </div>
                        <div className="font-medium">{method.price}</div>
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-bold mb-4">Способ оплаты</h2>
                  
                  <div className="space-y-4">
                    <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <input
                          type="radio"
                          name="payment"
                          value="wallet"
                          checked={formData.paymentMethod === 'wallet'}
                          onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                          className="text-apple-blue"
                        />
                        <div>
                          <div className="font-medium">Баланс кошелька</div>
                          <div className="text-sm text-gray-500">Оплата с вашего счета на сайте</div>
                        </div>
                      </div>
                    </label>
                    
                    <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <input
                          type="radio"
                          name="payment"
                          value="crypto"
                          checked={formData.paymentMethod === 'crypto'}
                          onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                          className="text-apple-blue"
                        />
                        <div>
                          <div className="font-medium">Криптовалюта</div>
                          <div className="text-sm text-gray-500">Bitcoin, Ethereum, USDT</div>
                        </div>
                      </div>
                    </label>
                  </div>
                  
                  {formData.paymentMethod === 'crypto' && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800">
                        После оформления заказа мы сгенерируем для вас уникальный адрес для оплаты криптовалютой.
                        Заказ будет автоматически подтвержден после 2 подтверждений в сети.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}

              <div className="mt-8 flex justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="btn-secondary"
                    disabled={isSubmitting}
                  >
                    Назад
                  </button>
                ) : (
                  <div></div>
                )}
                
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Обработка...' : step < 3 ? 'Продолжить' : 'Оформить заказ'}
                </button>
              </div>
            </form>
          </div>

          {/* Сводка заказа */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Ваш заказ</h2>
              
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-gray-500">Количество: {item.quantity}</div>
                    </div>
                    <div className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between">
                  <span>Товары ({items.reduce((sum, item) => sum + item.quantity, 0)} шт.)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Доставка</span>
                  <span>
                    {formData.deliveryMethod === 'courier' ? '$19' : 
                     formData.deliveryMethod === 'pickup' ? '$9' : '$15'}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-3 border-t">
                  <span>Итого</span>
                  <span>
                    ${(totalPrice + (
                      formData.deliveryMethod === 'courier' ? 19 : 
                      formData.deliveryMethod === 'pickup' ? 9 : 15
                    )).toFixed(2)}
                  </span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-gray-500">
                  Нажимая "Оформить заказ", вы соглашаетесь с условиями обработки персональных данных
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
