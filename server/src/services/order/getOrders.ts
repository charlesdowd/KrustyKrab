import { IOrderDocument, Order } from '../../models';

export async function getOrders(userId: string): Promise<IOrderDocument[]> {
  // Populate the customer field with the user
  return Order.find({ customer: userId }).populate('customer');
}
