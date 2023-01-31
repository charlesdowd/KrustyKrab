import { Request, Response } from 'express';
import MessageResponse from '../interfaces/MessageResponse';
import AuthService from '../services/auth';

/**
 * @desc Login
 * @route POST /auth
 * @access Public
 */
async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  // Get access + refresh tokens for user
  const { refreshToken, accessToken, foundUser } = await AuthService.login(
    email,
    password,
  );

  // Set secure cookie named 'jwt' with refresh token
  res.cookie('refresh_jwt', refreshToken, {
    httpOnly: true, // accessible only by web server
    secure: true, // https
    sameSite: 'none', // cross-site cookie
    maxAge: 7 * 24 * 60 * 60 * 60, // expire after 7 days to match refresh token
  });

  // Return the access token and the user object
  return res.status(200).json({ accessToken, user: foundUser });
}

/**
 * @desc Refresh Auth Token
 * @route GET /auth/refresh
 * @access Public - because access token has expired
 */
async function refresh(req: Request, res: Response) {
  const { cookies } = req;

  // Return 401 if refresh cookie does not exist
  if (!cookies?.refresh_jwt)
    return res.status(401).json({ message: 'Unauthorized' });

  const refreshToken = cookies.refresh_jwt; // grab refresh token from the cookie

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

  if (!cookies?.refresh_jwt) return res.sendStatus(204); // No content

  // Clear jwt cookie
  res.clearCookie('refresh_jwt', {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  });

  return res.status(200).json({ message: 'Cookie Cleared' });
}

async function register(req: Request, res: Response<MessageResponse>) {
  const { email } = req.body; // TODO: sanitize emails throughout codebase

  const lowerCaseEmail = email.toLowerCase();

  // Create new user and send verification email
  await AuthService.register(lowerCaseEmail);

  return res.status(200).send({ message: 'Register email sent' });
}

async function verifyEmail(req: Request, res: Response) {
  const { emailToken } = req.body;

  await AuthService.verifyEmail(emailToken);

  return res.status(200).send({ message: 'Email verified' });
}

export default { login, refresh, logout, register, verifyEmail };
