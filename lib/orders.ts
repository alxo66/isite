export interface OrderItem {
  id: number
  name: string
  price: number
  quantity: number
}

export interface Order {
  id: string
  items: OrderItem[]
  total: number
  customerName: string
  customerEmail: string
  customerPhone: string
  shippingAddress: string
  deliveryMethod: string
  paymentMethod: string
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled'
  createdAt: Date
  cryptoPayment?: {
    currency: string
    address: string
    amount: number
  }
}

export class OrderManager {
  private static STORAGE_KEY = 'iphone-store-orders'

  static createOrder(orderData: Omit<Order, 'id' | 'createdAt' | 'status'>): Order {
    const order: Order = {
      ...orderData,
      id: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      status: 'pending',
      createdAt: new Date()
    }

    // Сохраняем в localStorage
    const orders = this.getAllOrders()
    orders.push(order)
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(orders))

    return order
  }

  static getAllOrders(): Order[] {
    if (typeof window === 'undefined') return []
    
    const ordersJson = localStorage.getItem(this.STORAGE_KEY)
    return ordersJson ? JSON.parse(ordersJson) : []
  }

  static getOrder(id: string): Order | null {
    const orders = this.getAllOrders()
    return orders.find(order => order.id === id) || null
  }

  static updateOrderStatus(id: string, status: Order['status']): boolean {
    const orders = this.getAllOrders()
    const orderIndex = orders.findIndex(order => order.id === id)
    
    if (orderIndex === -1) return false
    
    orders[orderIndex].status = status
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(orders))
    
    return true
  }
}
