import express from 'express';
import { client } from '../bitcoin';

const router = express.Router();

// Listar últimos blocos
router.get('/recent/:count', async (req, res) => {
  try {
    const count = Number(req.params.count) || 10;
    const bestBlockHeight = await client.command('getblockcount');
    const recentBlocks = [];

    for (let i = 0; i < count; i++) {
      const height = bestBlockHeight - i;
      if (height < 0) break;

      const blockHash = await client.command('getblockhash', height);
      const blockData = await client.command('getblock', blockHash);

      recentBlocks.push({
        height,
        hash: blockHash,
        time: blockData.time,
        txCount: blockData.tx.length,
      });
    }

    res.json({ recentBlocks });
  } catch (error) {
    console.error('Error fetching recent blocks:', error);
    res.status(500).json({ error: 'Error fetching recent blocks' });
  }
});

// Detalhes de um bloco específico
router.get('/:hash', async (req, res) => {
  try {
    const { hash } = req.params;

    const blockData = await client.command('getblock', hash);
    res.json({ blockData });
  } catch (error) {
    console.error('Error fetching block details:', error);
    res.status(500).json({ error: 'Error fetching block details' });
  }
});

export default router;
