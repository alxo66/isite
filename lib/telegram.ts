export interface TelegramOrderData {
  orderId: string
  customerName: string
  customerPhone: string
  customerEmail: string
  items: Array<{
    name: string
    quantity: number
    price: number
  }>
  total: number
  paymentMethod: string
  shippingAddress: string
  status: string
}

const BOT_TOKEN = '8363922433:AAFBJ_g338SwrvAN77y90mLqi3OjuiEFnM8'
const CHAT_ID = '@crypto_applestore_bot' // или ID чата

export async function sendOrderToTelegram(order: TelegramOrderData): Promise<boolean> {
  try {
    // Форматируем сообщение
    const message = `
🎉 НОВЫЙ ЗАКАЗ #${order.orderId}

👤 Клиент: ${order.customerName}
📞 Телефон: ${order.customerPhone}
📧 Email: ${order.customerEmail}
📍 Адрес: ${order.shippingAddress}
💰 Способ оплаты: ${order.paymentMethod}
📦 Статус: ${order.status}

🛒 Товары:
${order.items.map(item => `• ${item.name} x${item.quantity} - $${item.price * item.quantity}`).join('\n')}

💵 Итого: $${order.total}
📅 Дата: ${new Date().toLocaleString('ru-RU')}
    `.trim()

    // Отправляем в Telegram
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    })

    return response.ok
  } catch (error) {
    console.error('Ошибка отправки в Telegram:', error)
    return false
  }
}

// Функция для отправки уведомления о пополнении
export async function sendDepositNotification(
  amount: number, 
  currency: string, 
  transactionHash?: string
): Promise<boolean> {
  try {
    const message = `
💰 ПОПОЛНЕНИЕ БАЛАНСА

Сумма: ${amount} ${currency}
${transactionHash ? `Хэш транзакции: ${transactionHash}` : ''}
Время: ${new Date().toLocaleString('ru-RU')}
    `.trim()

    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message
      })
    })

    return response.ok
  } catch (error) {
    console.error('Ошибка отправки уведомления:', error)
    return false
  }
}
