import { connectDB } from '@/lib/db';
import { Product } from '@/models/Product';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  context: { params: { category: string; type: string; product: string } }
) {
  const { category, type, product } = context.params;

  await connectDB();

  try {
    const item = await Product.findOne({
      category,
      type,
      slug: product,
    }).lean();

    if (!item) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(item);
  } catch (error) {
    console.error('Ошибка при получении товара:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
