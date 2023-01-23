import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import { HttpStatusError } from 'common-errors';
import { IUser } from '../models';

const { ACCESS_TOKEN_SECRET = '' } = process.env;

const verifyJWT = (req: any, res: Response, next: NextFunction) => {
  // Look for auth headers in upper or lower case - not always necessary
  const authHeader = req.headers.authorization || req.headers.Authorization;

  // If auth header is some weird value or does not start correctly, fail here
  if (typeof authHeader !== 'string' || !authHeader.startsWith('Bearer ')) {
    throw new HttpStatusError(400, 'Unauthorized');
  }

  // Decode username from jwt and attach to request
  const token = authHeader.split(' ')[1];
  // Cast the type of the decoded info
  const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET) as {
    user: IUser;
  };

  // Attach user to request
  req.user = decoded.user;

  // continue
  next();
};

export default verifyJWT;
