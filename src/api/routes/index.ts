import { Router } from 'express';
import userRoutes from './user.routes.js';

const router = Router();

router.use('/users', userRoutes);
// Add other resource routes here
// import productRoutes from './product.routes';
// router.use('/products', productRoutes);

export default router;
