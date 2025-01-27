// src/index.ts

import express from 'express';
import { client } from './bitcoin';

const app = express();
app.use(express.json());

// Rota para pegar info da blockchain (regtest/testnet)
app.get('/api/info', async (req, res) => {
  try {
    const info = await client.getBlockchainInfo();
    return res.json(info);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error fetching blockchain info' });
  }
}); 

// Rota para obter dados de um bloco por altura
app.get('/api/block/:height', async (req, res) => {
  try {
    const height = Number(req.params.height);

    // Recupera o hash do bloco nessa altura
    const blockHash = await client.command('getblockhash', height);

    // Recupera os dados do bloco pelo hash
    const blockData = await client.command('getblock', blockHash);

    return res.json({
      blockHash,
      block: blockData,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error fetching block data' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
