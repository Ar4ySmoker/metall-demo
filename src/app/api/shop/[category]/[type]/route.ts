import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Product } from '@/models/Product';

export async function GET(
  req: NextRequest,
  context: any
) {
  const { title, type } = context.params;

  await connectDB();

  try {
    const products = await Product.find({
      title: decodeURIComponent(title),
      type: decodeURIComponent(type),
    }).lean();

    const cleanedProducts = products.map((product) => ({
      ...product,
      _id: (product._id as { toString: () => string }).toString(),
    }));

    return NextResponse.json(cleanedProducts);
  } catch (error) {
    console.error('[API] Ошибка при получении товаров:', error);
    return NextResponse.json(
      { error: 'Ошибка сервера при получении товаров' },
      { status: 500 }
    );
  }
}
