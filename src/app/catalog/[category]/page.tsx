import { notFound } from 'next/navigation';
import { connectDB } from '@/lib/db';
import { Category } from '@/models/Category';
import { Product } from '@/models/Product';
import { ProductTable } from '@/components/tables/product-table';
import { Breadcrumbs } from '@/components/breadcrumbs/Breadcrumbs';

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params;
  await connectDB();

  // Проверяем, существует ли такая категория
  const categoryData = await Category.findOne({ slug: category }).lean();
  if (!categoryData) return notFound();

  const products = await Product.find({ category }).lean();

  const cleanedProducts = products.map((product: any) => ({
    ...product,
    _id: product._id.toString(),
  }));

  return (
    <main>
      <Breadcrumbs />
      <ProductTable products={cleanedProducts} />
    </main>
  );
}
