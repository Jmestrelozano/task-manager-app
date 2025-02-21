import { getServerSession } from 'next-auth/next'
import { NextResponse } from 'next/server'


export async function GET(request: Request) {
  const session = await getServerSession()

  if (!session) {
    return new NextResponse(JSON.stringify({ error: 'unauthorized' }), {
      status: 401
    })
  }

  return NextResponse.json({ authenticated: !!session })
}