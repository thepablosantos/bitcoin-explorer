import express from 'express';
import { client } from '../bitcoin'; // Importa o client

const router = express.Router();

// Exemplo de rota para blocos
router.get('/:height', async (req, res) => {
  try {
    const height = Number(req.params.height);

    // Recupera o hash do bloco nessa altura (Exemplo)
    const blockHash = await client.command('getblockhash', height);

    // Recupera os dados do bloco pelo hash
    const blockData = await client.command('getblock', blockHash);

    res.json({ blockHash, block: blockData });
  } catch (error) {
    console.error('Error fetching block data:', error);
    res.status(500).json({ error: 'Error fetching block data' });
  }
});

export default router;
