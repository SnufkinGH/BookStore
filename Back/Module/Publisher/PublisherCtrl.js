import Router from 'express';
import { PublisherM } from './Model/PublisherM.js';

const router = new Router();
const publisherM = new PublisherM();

router.post('/get-one', publisherM.getOne);

export default router;

