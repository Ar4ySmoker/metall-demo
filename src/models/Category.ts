import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  slug: string;
  description: string;
  subcategory: string; // Можно оставить как строку, если это просто название подкатегории
  parent?: mongoose.Types.ObjectId | null; // Используем ObjectId для родительской категории
}

const CategorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, default: '' }, // Если описание не обязательно, можно сделать дефолтным пустым
  subcategory: { type: String, required: true }, // Это будет подкатегория товара
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null }, // ObjectId для связи с родительской категорией
});

export const Category = mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);
