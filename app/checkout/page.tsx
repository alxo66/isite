'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { ArrowLeft, Shield, CreditCard, Truck } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()
  const [step, setStep] = useState(1)
  
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Здесь будет отправка заказа на сервер
      alert('Заказ оформлен! Мы свяжемся с вами для подтверждения.')
      clearCart()
      // Перенаправление на главную
    }
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Заголовок и шаги */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-apple-blue mb-6">
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
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      После оформления заказа мы отправим вам адрес для оплаты криптовалютой.
                      Заказ будет обработан после 3 подтверждений в сети.
                    </p>
                  </div>
                </motion.div>
              )}

              <div className="mt-8 flex justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="btn-secondary"
                  >
                    Назад
                  </button>
                ) : (
                  <div></div>
                )}
                
                <button
                  type="submit"
                  className="btn-primary"
                >
                  {step < 3 ? 'Продолжить' : 'Оформить заказ'}
                </button>
              </div>
            </form>
          </div>

          {/* Сводка заказа */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Ваш заказ</h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-gray-500">Количество: {item.quantity}</div>
                    </div>
                    <div className="font-medium">
                      ${item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between">
                  <span>Товары</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Доставка</span>
                  <span>$19</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-3 border-t">
                  <span>Итого</span>
                  <span>${totalPrice + 19}</span>
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
