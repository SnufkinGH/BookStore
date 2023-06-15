import Router from 'express';
import { AuthM } from './Model/AuthM.js';

const router = new Router();
const authM = new AuthM();

router.post('/login', authM.login);
router.post('/registration', authM.registration);

export default router;