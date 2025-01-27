import express from 'express';
import { mineBlocks } from '../controllers/mineController';

const router = express.Router();

router.post('/', mineBlocks);

export default router;
