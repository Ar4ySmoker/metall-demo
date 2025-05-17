import { notFound } from 'next/navigation';
import { connectDB } from '@/lib/db';
import { Category } from '@/models/Category';
import { Product } from '@/models/Product';
import { ProductTable } from '@/components/tables/product-table';
import { Breadcrumbs } from '@/components/breadcrumbs/Breadcrumbs';

export default async function TypePage({
  params,
}: {
  params: Promise<{ category: string; type: string }>;
}) {
  // Ожидаем, пока параметры будут разрешены
  const { category, type } = await params;

  console.log('Received params:', { category, type });

  await connectDB();

  // Находим родительскую категорию по slug
  const parentCategory = await Category.findOne({ slug: category }).lean();
  if (!parentCategory || !('_id' in parentCategory)) return notFound();

  // Находим подкатегорию по slug и parent ID
  const subcategory = await Category.findOne({
    slug: type,
    parent: parentCategory._id, // Используем ObjectId без .toString()
  }).lean();

  if (!subcategory) return notFound();

  // Ищем товары по категориям и типу
  const products = await Product.find({ category, type }).lean();

  // Преобразуем _id в строку для MongoDB
  const cleanedProducts = products.map((product) => ({
    ...product,
    _id: (product._id as { toString(): string }).toString(),
  }));

  return (
    <main>
      <Breadcrumbs />
      <ProductTable products={cleanedProducts} />
    </main>
  );
}
