import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newContactMessage = await prisma.contactMessage.create({
      data: {
        firstName,
        lastName,
        email,
        message,
      },
    });

    return NextResponse.json(
      { message: 'Message received successfully', data: newContactMessage },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error saving contact message:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
