import { Request, Response } from 'express';
import AdminService from '../services/admin';
import MessageResponse from '../interfaces/MessageResponse';
import { IOrder, IProduct } from '../models';

/**
 * @desc Approve a users account
 * @route POST /approve-account
 * @access Admin only
 */
async function approveAccount(req: Request, res: Response<MessageResponse>) {
  const { userId } = req.body;

  await AdminService.approveAccount(userId);

  return res.status(201).send({ message: 'User successfully approved' });
}

async function getAllOrders(req: Request, res: Response<{ orders: IOrder[] }>) {
  const orders = await AdminService.getAllOrders();
  return res.status(200).json({ orders });
}

/**
 * @desc Create a new product
 * @route POST /product
 * @access Admin only
 *
 * Req.body should be of type IProduct
 */
async function createProduct(
  req: Request<IProduct>,
  res: Response<MessageResponse>,
) {
  await AdminService.createProduct({ ...req.body });

  return res.status(201).send({ message: 'Product successfully created' });
}

export default {
  approveAccount,
  createProduct,
  getAllOrders,
};
