import { Request, Response } from 'express';
import AuthService from '../services/auth';

/**
 * @desc Login
 * @route POST /auth
 * @access Public
 */
async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  // Get access + refresh tokens for user
  const { refreshToken, accessToken } = await AuthService.login(
    email,
    password,
  );

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

  if (!cookies?.jwt) return res.status(401).json({ message: 'Unauthorized' });
  const refreshToken = cookies.jwt; // grab refresh token from the cookie

  const { accessToken } = await AuthService.refresh(refreshToken);

  return res.json({ accessToken });
}

/**
 * @desc Logout
 * @route POST /auth/logout
 * @access Public - just to clear cookie if exists
 */
async function logout(req: Request, res: Response) {
  const { cookies } = req;

  if (!cookies?.jwt) return res.sendStatus(204); // No content

  // Clear jwt cookie
  res.clearCookie('jwt', { httpOnly: true, sameSite: 'none', secure: true });

  return res.json({ message: 'Cookie Cleared' });
}

export default { login, refresh, logout };
