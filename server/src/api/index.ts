import { Router } from 'express';

import MessageResponse from '../interfaces/MessageResponse';

import users from './routes/user.routes';
import todos from './routes/todo.routes';
import auth from './routes/auth.routes';

const router = Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

// TODO: Consider unauth, auth, and admin routers - use LEX as example

// TODO: Add basic rate limiter middleware for unauthenticated routes

router.use('/auth', auth);
router.use('/todo', todos);
router.use('/user', users);

export default router;
