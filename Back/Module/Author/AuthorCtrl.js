import Router from 'express';
import { AuthorM } from './Model/AuthorM.js';

const router = new Router();
const authorM = new AuthorM();

router.post('/get-one', authorM.getOne);

export default router;

