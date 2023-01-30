import { Request } from 'express';
import { IUser } from '../models';

export default interface AuthenticatedRequest<T = any> extends Request<T> {
  user: IUser;
}
