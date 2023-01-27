import jwt, { Secret } from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import { HttpError } from '../util/Errors';

const verifyJWT = (req: any, res: Response, next: NextFunction) => {
  // Look for auth headers in upper or lower case - not always necessary
  const authHeader = req.headers.authorization || req.headers.Authorization;

  // If auth header is some weird value or does not start correctly, fail here
  if (typeof authHeader !== 'string' || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  try {
    // Decode username from jwt and attach to request
    const accessToken = authHeader.split(' ')[1];

    const decoded: any = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET as Secret,
    );

    // Attach user to request in case we need it
    req.user = decoded.user;
  } catch (error) {
    // Throw different error if the jwt is expired
    if (error instanceof jwt.TokenExpiredError) {
      throw new HttpError('JWT token expired', {
        status: 403,
        friendlyMessage: 'Expired credentials',
      });
    }
    throw new HttpError('Error while decoding JWT', {
      status: 403,
      friendlyMessage: 'Error authenticating credentials',
    });
  }

  // continue
  next();
};

export default verifyJWT;
