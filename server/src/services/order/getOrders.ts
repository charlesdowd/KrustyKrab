import { IOrderDocument, Order } from '../../models';

export async function getOrders(userId: string): Promise<IOrderDocument[]> {
  return Order.find({ customer: userId });
}
