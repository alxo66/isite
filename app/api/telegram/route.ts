import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    // Здесь можно обработать данные от Telegram, если это вебхук
    console.log('Telegram webhook received:', body)
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Error processing Telegram webhook:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

// Если нужно обрабатывать GET запросы для установки вебхука
export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Telegram webhook is active' })
}
