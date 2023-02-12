import { Router } from 'express';
import loginLimiter from '../../middleware/rateLimiters/loginLimiter';
import AuthController from '../../controllers/auth.controller';
import tryCatch from '../../middleware/tryCatch';
import registerLimiter from '../../middleware/rateLimiters/registerLimiter';

const router = Router();

// Register User
router.post('/register', registerLimiter, tryCatch(AuthController.register));

// Verify email
router.post('/verify-email', tryCatch(AuthController.verifyEmail));

// Set Password
router.post('/set-password', tryCatch(AuthController.setPassword));

// Login User
router.post('/', loginLimiter, tryCatch(AuthController.login));

// Refresh Token
router.get('/refresh', tryCatch(AuthController.refresh));

// Logout User
router.post('/logout', tryCatch(AuthController.logout));

export default router;
