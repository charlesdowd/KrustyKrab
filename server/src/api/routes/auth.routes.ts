import { Router } from 'express';
import loginLimiter from '../../middleware/loginLimiter';
import AuthController from '../../controllers/auth.controller';
import { tryCatch } from '../../middleware/tryCatch';

const router = Router();

// Login User
router.post('/', loginLimiter, tryCatch(AuthController.login));

// Refresh Token
router.get('/refresh', tryCatch(AuthController.refresh));

// Logout User
router.post('/logout', tryCatch(AuthController.logout));

export default router;
