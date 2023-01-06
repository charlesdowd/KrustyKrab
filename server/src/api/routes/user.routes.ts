import { Router } from 'express';
import UserController from '../../controllers/user.controller';
import verifyJWT from '../../middleware/verifyJWT';
import { tryCatch } from '../../services/util';

const router = Router();

// Use auth middleware for this router
router.use(verifyJWT);

router.get('/', tryCatch, UserController.getUsers);

router.post('/', tryCatch, UserController.createUser);

router.get('/:userId', tryCatch, UserController.getUser);

export default router;
