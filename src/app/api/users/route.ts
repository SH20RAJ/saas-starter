import { NextRequest, NextResponse } from 'next/server';
import { createUser, getAllUsers } from '@/lib/db-utils';

export async function GET() {
  try {
    const users = await getAllUsers();
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();
    
    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const user = await createUser(name, email);
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}