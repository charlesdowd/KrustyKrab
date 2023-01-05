import { Router } from 'express';
import loginLimiter from '../../middleware/loginLimiter';
import UserController from '../../controllers/user.controller';

const router = Router();

// Login User
router.post('/', loginLimiter, UserController.getUser);

// Refresh Token
router.route('/refresh').get(UserController.getUsers);

// Logout User
router.route('/logout').post(UserController.createUser);

export default router;
