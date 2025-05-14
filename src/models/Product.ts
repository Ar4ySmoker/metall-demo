// models/Product.ts
import mongoose, { Schema, Document } from 'mongoose';
import { Category } from './Category';
console.log(Category)

interface IProduct extends Document {
  category: string; // Ссылка на категорию
  title: string;
  description: string;
  price: number;
  slug: string;
  image: string; // URL изображения товара
  seoTitle: string; // Для SEO title
  seoDescription: string; // Для SEO description
  seoKeywords: string; // Для SEO keywords
  seoImage: string; // Для SEO Open Graph Image
}

const ProductSchema = new Schema<IProduct>({
  category: { type: String, required: true, ref: 'Category' },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  slug: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  seoTitle: { type: String, required: true },
  seoDescription: { type: String, required: true },
  seoKeywords: { type: String, required: true },
  seoImage: { type: String, required: true },
});

export const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
