// // models/Category.ts
// import mongoose, { Schema, Document } from 'mongoose';

// interface ICategory extends Document {
//   name: string;
//   slug: string;
//   description: string;
//   seoTitle: string; // Для SEO title
//   seoDescription: string; // Для SEO description
//   seoKeywords: string; // Для SEO keywords
//   seoImage: string; // Для SEO Open Graph Image
// }

// const CategorySchema = new Schema<ICategory>({
//   name: { type: String, required: true },
//   slug: { type: String, required: true, unique: true },
//   description: { type: String, required: true },
//   seoTitle: { type: String, required: true },
//   seoDescription: { type: String, required: true },
//   seoKeywords: { type: String, required: true },
//   seoImage: { type: String, required: true },
// });

// export const Category = mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);
// models/Category.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  slug: string;
  description: string;
  parent?: string; // slug родительской категории
}

const CategorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  parent: { type: String, default: null } // Можно сделать ref: 'Category', если хочешь ObjectId
});

export const Category = mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);
