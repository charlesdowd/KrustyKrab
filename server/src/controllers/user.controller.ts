import { Request, Response } from 'express';
import { IUser } from '../models';
import UserService from '../services/user';

/**
 *
 * @param req
 * @param res
 * @returns { IUser[] } all users
 */
async function getUsers(req: Request, res: Response<{ users: IUser[] }>) {
  const users = await UserService.getUsers();

  return res.status(200).json({ users });
}

/**
 *
 * @param req
 * @param res
 * @returns { IUser } the queried user
 */
async function getUser(req: Request, res: Response<{ user: IUser }>) {
  const { userId } = req.params;
  const user = await UserService.getUser(userId);

  return res.status(200).json({ user });
}

/**
 *
 * @param req
 * @param res
 * @returns { string } successfull 204 status and message
 */
async function createUser(req: Request<IUser>, res: Response) {
  const { password, email } = req.body;
  await UserService.createNewUser(email, password);

  return res.status(200).json({ message: 'User successfully created' });
}

export default {
  getUser,
  getUsers,
  createUser,
};
