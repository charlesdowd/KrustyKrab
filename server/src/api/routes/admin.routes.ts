import { Router } from 'express';
import checkAdmin from '../../middleware/checkAdmin';
import { tryCatch } from '../../middleware/tryCatch';
import verifyJWT from '../../middleware/verifyJWT';
import AdminController from '../../controllers/admin.controller';

const router = Router();

// Protect router with admin middleware
router.use(verifyJWT);
router.use(checkAdmin);

router.post('/approve-account', tryCatch(AdminController.approveAccount));

export default router;
