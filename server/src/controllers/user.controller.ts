import { Request, Response } from 'express';
import { IUser } from '../models';
import UserService from '../services/user';

/**
 *
 * @param req
 * @param res
 * @returns { IUser[] } all users
 */
async function getUsers(req: Request, res: Response<IUser[]>) {
  const users = await UserService.getUsers();
  return res.status(200).json(users);
}

/**
 *
 * @param req
 * @param res
 * @returns
 */
async function getUser(req: Request, res: Response<IUser>) {
  const { userId } = req.params;
  const user = await UserService.getUser(userId);

  return res.status(200).json(user);
}

/**
 *
 * @param req
 * @param res
 * @returns successfull 204 status
 */
async function createUser(req: Request<IUser>, res: Response) {
  await UserService.createUser(req.body);
  return res.status(204).json({ message: 'User successfully created' });
}

export default {
  getUser,
  getUsers,
  createUser,
};
