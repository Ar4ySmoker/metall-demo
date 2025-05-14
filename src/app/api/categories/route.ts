import { NextResponse } from 'next/server';
import {connectDB} from '@/lib/db';
import { Category } from '@/models/Category';

export async function GET() {
  await connectDB();

  try {
    const categories = await Category.find().lean();
    return NextResponse.json(categories);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Ошибка получения категорий' }, { status: 500 });
  }
}
