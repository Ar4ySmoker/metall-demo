// app/catalog/[category]/[product]/page.tsx
import { connectDB } from '@/lib/db';
import { Product } from '@/models/Product';

export default async function ProductPage({ params }: { params: Promise<{ product: string }> }) {
  const { product } = await params;
  await connectDB();

  const productData: any = await Product.findOne({ slug: product }).lean();
  
  if (!productData) return <h1>Товар не найден</h1>;

  const cleanedProductData = {
    ...productData,
    _id: productData._id.toString(), 
  };

  return (
    <main>
      <h1>{cleanedProductData.title}</h1>
      <p>{cleanedProductData.description}</p>
      <p>Цена: {cleanedProductData.price} ₽</p>
    </main>
  );
}
