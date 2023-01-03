import { Router } from 'express';

import MessageResponse from '../interfaces/MessageResponse';

import users from './routes/user.routes';
import todos from './routes/todo.routes';

const router = Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/todo', todos);
router.use('/user', users);

export default router;
