import jwt, { Secret } from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import { IUser } from '../models';

const verifyJWT = (req: any, res: Response, next: NextFunction) => {
  // Look for auth headers in upper or lower case - not always necessary
  const authHeader = req.headers.authorization || req.headers.Authorization;

  // If auth header is some weird value or does not start correctly, fail here
  if (typeof authHeader !== 'string' || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  try {
    // Decode username from jwt and attach to request
    const token = authHeader.split(' ')[1];

    // Cast the type of the decoded info to IUser
    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as Secret,
    ) as {
      user: IUser;
    };

    // Attach user to request
    req.user = decoded.user;
  } catch (error) {
    console.log(error); // Log error for server
    return res.status(403).send({ message: 'Forbidden' });
  }

  // continue
  next();
};

export default verifyJWT;
