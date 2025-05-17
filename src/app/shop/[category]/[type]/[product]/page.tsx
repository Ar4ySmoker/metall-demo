import { notFound } from 'next/navigation';
import { connectDB } from '@/lib/db';
import { Category } from '@/models/Category';
import { Product } from '@/models/Product';
import { ProductTable } from '@/components/tables/product-table';
import { Breadcrumbs } from '@/components/breadcrumbs/Breadcrumbs';

export default async function Page({
  params,
}: {
  params: Promise<{ category: string; type: string }>;
}) {
  const { category, type } = await params;  // Получаем параметры через await

  // Подключаемся к базе данных
  await connectDB();

  // Ищем родительскую категорию по slug
  const parentCategory = await Category.findOne({ slug: category }).lean();
  if (!parentCategory || !('_id' in parentCategory)) return notFound();

  // Ищем подкатегорию по slug и parent ID
  const subcategory = await Category.findOne({
    slug: type,
    parent: parentCategory._id,
  }).lean();

  if (!subcategory) return notFound();

  // Ищем товары по категориям
  const products = await Product.find({ category, type }).lean();

  // Преобразуем _id в строку
  const cleanedProducts = products.map((product) => ({
    ...product,
    _id: (product._id as { toString(): string }).toString(),
  }));

  // Отображаем таблицу товаров
  return (
    <main>
      <Breadcrumbs />
      <ProductTable products={cleanedProducts} />
    </main>
  );
}
