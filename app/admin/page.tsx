'use client'

import { useState, useEffect } from 'react'
import { Package, DollarSign, User, MapPin, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import { OrderManager } from '@/lib/orders'

interface OrderStatus {
  pending: string
  paid: string
  shipped: string
  delivered: string
  cancelled: string
}

export default function AdminPage() {
  const [orders, setOrders] = useState<any[]>([])
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Проверяем аутентификацию
    const isAuth = localStorage.getItem('admin-auth') === 'true'
    setIsAuthenticated(isAuth)
    
    if (isAuth) {
      loadOrders()
    }
  }, [])

  const loadOrders = () => {
    const allOrders = OrderManager.getAllOrders()
    setOrders(allOrders.reverse()) // Сначала новые
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Простой пароль для демо
    if (password === 'admin123' || password === 'test') {
      setIsAuthenticated(true)
      localStorage.setItem('admin-auth', 'true')
      loadOrders()
    } else {
      alert('Неверный пароль')
    }
  }

  const updateOrderStatus = (orderId: string, status: string) => {
    if (OrderManager.updateOrderStatus(orderId, status as any)) {
      loadOrders()
      alert('Статус обновлен')
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'paid': return 'bg-blue-100 text-blue-800'
      case 'shipped': return 'bg-purple-100 text-purple-800'
      case 'delivered': return 'bg-green-100 text-green-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <AlertCircle className="w-4 h-4" />
      case 'paid': return <DollarSign className="w-4 h-4" />
      case 'shipped': return <Package className="w-4 h-4" />
      case 'delivered': return <CheckCircle className="w-4 h-4" />
      case 'cancelled': return <XCircle className="w-4 h-4" />
      default: return null
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <div className="flex items-center justify-center mb-8">
            <Package className="w-12 h-12 text-apple-blue" />
          </div>
          
          <h1 className="text-2xl font-bold text-center mb-6">Вход в админ-панель</h1>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Пароль</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-apple-blue"
                placeholder="Введите пароль"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full btn-primary"
            >
              Войти
            </button>
            
            <p className="text-sm text-gray-500 text-center mt-4">
              Для демо-версии используйте пароль: <code className="bg-gray-100 px-2 py-1 rounded">admin123</code>
            </p>
          </form>
        </div>
      </div>
    )
  }

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0)
  const pendingOrders = orders.filter(order => order.status === 'pending').length
  const cryptoOrders = orders.filter(order => order.paymentMethod.includes('Крипто')).length

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Хедер админки */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Админ-панель</h1>
            <p className="text-gray-600">Управление заказами и продажами</p>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem('admin-auth')
              setIsAuthenticated(false)
            }}
            className="btn-secondary"
          >
            Выйти
          </button>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Общая выручка</p>
                <p className="text-2xl font-bold">${totalRevenue.toFixed(2)}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                <Package className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Ожидают обработки</p>
                <p className="text-2xl font-bold">{pendingOrders}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Крипто-заказы</p>
                <p className="text-2xl font-bold">{cryptoOrders}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Список заказов */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="text-xl font-bold">Все заказы ({orders.length})</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">ID заказа</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Клиент</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Сумма</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Статус</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Оплата</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Дата</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Действия</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                      Заказов пока нет
                    </td>
                  </tr>
                ) : (
                  orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <code className="text-sm font-mono">{order.id}</code>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium">{order.customerName}</p>
                          <p className="text-sm text-gray-500">{order.customerEmail}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-bold">${order.total}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)}
                          <span className="ml-2">
                            {order.status === 'pending' && 'Ожидает'}
                            {order.status === 'paid' && 'Оплачен'}
                            {order.status === 'shipped' && 'Отправлен'}
                            {order.status === 'delivered' && 'Доставлен'}
                            {order.status === 'cancelled' && 'Отменен'}
                          </span>
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {order.paymentMethod}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(order.createdAt).toLocaleDateString('ru-RU')}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          {order.status === 'pending' && (
                            <>
                              <button
                                onClick={() => updateOrderStatus(order.id, 'paid')}
                                className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200"
                              >
                                Оплачен
                              </button>
                              <button
                                onClick={() => updateOrderStatus(order.id, 'cancelled')}
                                className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200"
                              >
                                Отменить
                              </button>
                            </>
                          )}
                          {order.status === 'paid' && (
                            <button
                              onClick={() => updateOrderStatus(order.id, 'shipped')}
                              className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-sm hover:bg-purple-200"
                            >
                              Отправить
                            </button>
                          )}
                          {order.status === 'shipped' && (
                            <button
                              onClick={() => updateOrderStatus(order.id, 'delivered')}
                              className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm hover:bg-green-200"
                            >
                              Доставлен
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Инструкция */}
        <div className="mt-8 bg-blue-50 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Инструкция для администратора:</h3>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-blue-800">
            <li>Новые заказы появляются в статусе "Ожидает"</li>
            <li>При получении оплаты — меняйте статус на "Оплачен"</li>
            <li>После отправки товара — статус "Отправлен"</li>
            <li>После доставки — статус "Доставлен"</li>
            <li>При проблемах — статус "Отменен"</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
