import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Product } from '@/models/Product';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ category: string; type: string; product: string }> }
) {
  const { category, type, product } = await params;

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
