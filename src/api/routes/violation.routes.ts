// src/api/routes/violation.routes.ts
import { Router } from 'express';
import violationController from '../controllers/violation.controller';

const router = Router();

// Route to demonstrate coding standard violations
router.post('/violate', violationController.violateTheRules);

export default router;
