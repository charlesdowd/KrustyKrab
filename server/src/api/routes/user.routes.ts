import { Router } from 'express';
import UserController from '../../controllers/user.controller';
import verifyJWT from '../../middleware/verifyJWT';
import { tryCatch } from '../../middleware/tryCatch';

const router = Router();

// TODO: Add this to all authenticated routes. It attaches user to the req
router.use(verifyJWT);

// TODO: add some sort of admin middleware to this route and createUser route
router.get('/all', tryCatch(UserController.getAllUsers));

router.post('/', tryCatch(UserController.createUser));

router.get('/', tryCatch(UserController.getUser));

export default router;
