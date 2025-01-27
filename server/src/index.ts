// src/index.ts

import express from 'express';
import blockRoutes from './routes/block';
import transactionRoutes from './routes/transaction';
import walletRoutes from './routes/wallet';
import mineRoutes from './routes/mine';
import { client } from './bitcoin';

const app = express();
app.use(express.json());

// Rota para pegar informações gerais da blockchain (regtest/testnet)
app.get('/api/info', async (req, res) => {
  try {
    const info = await client.getBlockchainInfo();
    return res.json(info);
  } catch (error) {
    console.error('Error fetching blockchain info:', error);
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
    console.error('Error fetching block data:', error);
    return res.status(500).json({ error: 'Error fetching block data' });
  }
});

// Adicionar as rotas dos arquivos separados
app.use('/api/block', blockRoutes);
app.use('/api/transaction', transactionRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/mine', mineRoutes);

// Subindo o servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
