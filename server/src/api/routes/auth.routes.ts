import { Router } from 'express';
import loginLimiter from '../../middleware/loginLimiter';
import AuthController from '../../controllers/auth.controller';
import { tryCatch } from '../../services/util';

const router = Router();

// Login User
router.post('/', loginLimiter, tryCatch(AuthController.login));

// Refresh Token
router.get('/refresh', tryCatch(AuthController.refresh));

// Logout User
router.post('/logout', AuthController.logout);

export default router;
