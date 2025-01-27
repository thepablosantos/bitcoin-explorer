import { Request, Response } from 'express';
import { client } from '../bitcoin';

// Minerar blocos no regtest
export const mineBlocks = async (req: Request, res: Response) => {
  try {
    const { blocks } = req.body;
    const rewardAddress = await client.command('getnewaddress');
    const minedBlocks = await client.command('generatetoaddress', parseInt(blocks), rewardAddress);
    res.json({ minedBlocks });
  } catch (error) {
    console.error('Error mining blocks:', error);
    res.status(500).json({ error: 'Mining failed' });
  }
};
