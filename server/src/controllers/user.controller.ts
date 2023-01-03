import { Request, Response } from 'express';
import MessageResponse from '../interfaces/MessageResponse';
import { IUser } from '../models';
import UserService from '../services/user';

/**
 *
 * @param req
 * @param res
 * @returns { IUser[] } all users
 */
async function getUsers(req: Request, res: Response<IUser[]>) {
  try {
    const users = await UserService.getUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}

/**
 *
 * @param req
 * @param res
 * @returns
 */
async function getUser(req: Request, res: Response<IUser | MessageResponse>) {
  try {
    const { userId } = req.params;
    const user = await UserService.getUser(userId);

    // If user found
    if (user) {
      return res.status(200).json(user);
    }
    // If user is not found
    return res.status(404).send({ message: 'User not found' });
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}

/**
 *
 * @param req
 * @param res
 * @returns successfull 204 status
 */
async function createUser(req: Request<IUser>, res: Response) {
  try {
    await UserService.createUser(req.body);
    return res.status(204);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}

export default {
  getUser,
  getUsers,
  createUser,
};
