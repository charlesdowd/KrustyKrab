import { Router } from 'express';
import TodoController from '../../controllers/todo.controller';
import verifyJWT from '../../middleware/verifyJWT';
import { tryCatch } from '../../middleware/tryCatch';

const router = Router();

// Use auth middleware for this router
router.use(verifyJWT);

router.get('/', tryCatch(TodoController.getAllTodos));

export default router;
