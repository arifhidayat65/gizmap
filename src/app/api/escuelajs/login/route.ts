import { escuelajsApi } from '@/services/escuelajs';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const credentials = await request.json();
    const data = await escuelajsApi.login(credentials);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Failed to login' }, { status: 500 });
  }
}
