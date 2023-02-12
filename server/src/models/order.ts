import { Schema, Document, model, ObjectId, Types } from 'mongoose';

const { ObjectId } = Types;

// Type to represent part of an order. Individual product and quantity ordered
export type OrderItem = {
  product: ObjectId;
  quantity: number;
};

// An order placed by a customer with the list of what products and how many of each product was requested
export interface IOrder {
  customer: ObjectId;
  orderItems: [OrderItem];
}

export interface IOrderDocument extends IOrder, Document {}

const orderSchema = new Schema(
  {
    customer: { type: ObjectId, ref: 'User' },
    orderItems: [
      {
        product: { type: ObjectId, required: true, ref: 'Product' },
        quantity: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true },
);

export default model<IOrder>('Order', orderSchema);
