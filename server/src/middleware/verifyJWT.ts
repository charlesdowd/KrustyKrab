import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';

const { ACCESS_TOKEN_SECRET = '' } = process.env;

const verifyJWT = (req: any, res: Response, next: NextFunction) => {
  // Look for auth headers in upper or lower case - not always necessary
  const authHeader = req.headers.authorization || req.headers.Authorization;

  // If auth header is some weird value or does not start correctly, fail here
  if (typeof authHeader !== 'string' || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Decode username from jwt and attach to request
  const token = authHeader.split(' ')[1];
  // Cast the type of the decoded info
  const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET) as {
    UserInfo: { username: string };
  };
  req.user = decoded.UserInfo.username;

  // continue
  next();
};

export default verifyJWT;
