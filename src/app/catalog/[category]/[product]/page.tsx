// app/catalog/[category]/[product]/page.tsx
import { connectDB } from '@/lib/db';
import { Product } from '@/models/Product';

export default async function ProductPage({ params }: { params: Promise<{  product: string }> }) {
  const {  product } = await params;
  await connectDB();

  const productData: any = await Product.findOne({ slug: product }).lean();
  if (!productData) return <h1>Товар не найден</h1>;

  return (
    <main>
      <h1>{productData.title}</h1>
      <p>{productData.description}</p>
      <p>Цена: {productData.price} ₽</p>
    </main>
  );
}
