import { Router } from 'express';
import userRoutes from './user.routes.js';
import authRoutes from './auth.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
// Add other resource routes here
// import productRoutes from './product.routes.js';
// router.use('/products', productRoutes);

export default router;
