import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Проверяем, что запрос содержит данные
    const contentType = request.headers.get('content-type')
    
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type must be application/json' },
        { status: 400 }
      )
    }

    const body = await request.json()
    console.log('Telegram webhook received:', body)
    
    // Здесь можно обработать данные от Telegram, если это вебхук
    return NextResponse.json({ 
      ok: true,
      message: 'Webhook received successfully' 
    })
  } catch (error) {
    console.error('Error processing Telegram webhook:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Telegram webhook endpoint is active',
    instructions: 'Send POST requests with Telegram webhook data to this endpoint'
  })
}
