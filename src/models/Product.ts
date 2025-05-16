// models/Product.ts
import mongoose, { Schema, Document } from 'mongoose';
import { Category } from './Category';
console.log(Category)

interface IProduct extends Document {
  category: string; 
  title: string;
  fluidity: string;
  welded: string;
  description: string;
  price: number;
  unit: string;
  count: number;
  length: number;
  diameterMm: number;
  type: string;
  slug: string;
  image: string; 
  seoTitle: string; 
  seoDescription: string; 
  seoKeywords: string; 
  seoImage: string; 
}

const ProductSchema = new Schema<IProduct>({
  category: { type: String, required: true, ref: 'Category' },
  title: { type: String, required: true },
  fluidity: { type: String, required: true },
  welded: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  unit: { type: String, required: true },
  count: { type: Number, required: true },
  length: { type: Number, required: true },
  diameterMm: { type: Number, required: true },
  type: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  seoTitle: { type: String, required: true },
  seoDescription: { type: String, required: true },
  seoKeywords: { type: String, required: true },
  seoImage: { type: String, required: true },
});

export const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
