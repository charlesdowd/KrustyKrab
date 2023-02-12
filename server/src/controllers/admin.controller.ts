import { Request, Response } from 'express';
import AdminService from '../services/admin';
import MessageResponse from '../interfaces/MessageResponse';

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

export default {
  approveAccount,
};
