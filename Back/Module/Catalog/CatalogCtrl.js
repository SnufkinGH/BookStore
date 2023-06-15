import Router from 'express';
import { CatalogM } from './Model/CatalogM.js';
import { auth } from '../../Middleware/AuthMiddleware.js';
import { role } from '../../Middleware/RoleMiddleware.js';

const router = new Router();
const catalogM = new CatalogM();

router.get('/', role('ADMIN'), catalogM.init);

export default router;

