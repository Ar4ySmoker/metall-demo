

import { NextRequest, NextResponse } from 'next/server';
import {connectDB} from '@/lib/db';
import { Product } from '@/models/Product';

export async function GET(req: NextRequest) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');

  try {
    const query = category ? { category } : {};
    const products = await Product.find(query).lean();
    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Ошибка получения товаров' }, { status: 500 });
  }
}
