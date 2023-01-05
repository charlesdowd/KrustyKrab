import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models';
import AuthService from '../services/auth';

/**
 * @desc Login
 * @route POST /auth
 * @access Public
 */
async function login(req: Request, res: Response) {
  const { username, password } = req.body;

  // Check if all fields are present
  if (!username || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Check if user exists
  const foundUser = await User.findOne({ username });
  if (!foundUser) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Check to see if password matches
  const match = bcrypt.compare(password, foundUser.password);
  if (!match) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Get access + refresh tokens for user
  const { refreshToken, accessToken } = await AuthService.login(foundUser);

  // Set secure cookie named 'jwt' with refresh token
  res.cookie('jwt', refreshToken, {
    httpOnly: true, // accessible only by web server
    secure: true, // https
    sameSite: 'none', // cross-site cookie
    maxAge: 7 * 24 * 60 * 60 * 60, // expire after 7 days to match refresh token
  });

  // Return the access token
  return res.status(200).json({ accessToken });
}

/**
 * @desc Refresh Auth Token
 * @route GET /auth/refresh
 * @access Public - because access token has expired
 */
async function refresh(req: Request, res: Response) {
  const { cookies } = req;

  if (!cookies.jwt) return res.status(401).json({ message: 'Unauthorized' });
  const refreshToken = cookies.jwt; // grab refresh token from the cookie

  try {
    const accessToken = await AuthService.refresh(refreshToken);
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  return res.status(200).json({ message: 'success' }); // placeholder
}

/**
 * @desc Logout
 * @route POST /auth/logout
 * @access Public - just to clear cookie if exists
 */
async function logout(req: Request, res: Response) {}

export default { login, refresh, logout };
