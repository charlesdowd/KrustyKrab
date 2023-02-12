import { Schema, Document, model } from 'mongoose';

export interface IProduct {
  itemId: string;
  description: string;
  casePack: string;
  caseWeight: string;
  price: number;
}

export interface IProductDocument extends IProduct, Document {}

const productSchema = new Schema(
  {
    itemId: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    casePack: { type: String, required: true },
    caseWeight: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true },
);

export default model<IProduct>('Product', productSchema);
