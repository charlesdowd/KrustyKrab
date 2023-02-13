import { Router } from 'express';
import adminCheck from '../../middleware/adminCheck';
import tryCatch from '../../middleware/tryCatch';
import verifyJWT from '../../middleware/verifyJWT';
import AdminController from '../../controllers/admin.controller';

const router = Router();

// Protect router with admin middleware
router.use(verifyJWT);
router.use(adminCheck);

router.post('/approve-account', tryCatch(AdminController.approveAccount));

export default router;
