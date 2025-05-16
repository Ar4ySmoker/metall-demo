import { notFound } from 'next/navigation';
import { connectDB } from '@/lib/db';
import { Category } from '@/models/Category';
import { Product } from '@/models/Product';
import { ProductTable } from '@/components/tables/product-table';
import { Breadcrumbs } from '@/components/breadcrumbs/Breadcrumbs';

export default async function TypePage({
  params,
}: {
  params: { category: string; type: string };
}) {
  const { category, type } = await params; // Используем await для разрешения промиса

  console.log('Received params:', { category, type }); 

  await connectDB();

// Найти родительскую категорию по slug
const parentCategory = await Category.findOne({ slug: category }).lean();
console.log(`Категория ${category} не найдена`);

if (!parentCategory || !('_id' in parentCategory)) return notFound();

// Найти подкатегорию по slug и parent ID
const subcategory = await Category.findOne({
  slug: type,
  parent: parentCategory._id, // Используем ObjectId без .toString()
}).lean();


  if (!subcategory) return notFound();

const products = await Product.find({ category: category, type: type }).lean();

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

