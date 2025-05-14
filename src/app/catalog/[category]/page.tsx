// app/catalog/[category]/page.tsx
import { notFound } from 'next/navigation';
import { connectDB } from '@/lib/db';
import { Category } from '@/models/Category';
import { Product } from '@/models/Product';
import { ProductTable } from '@/components/tables/product-table';
import { Breadcrumbs } from '@/components/breadcrumbs/Breadcrumbs';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  await connectDB();

  const categoryData: any = await Category.findOne({ slug: category }).lean();
  if (!categoryData) return notFound(); 

  const products = await Product.find({ category }).lean();

  return (
    <main>
      <Breadcrumbs />
      <h1>{categoryData.name}</h1>
      <p>{categoryData.description}</p>
      <ProductTable products={products} />
    </main>
  );
}
