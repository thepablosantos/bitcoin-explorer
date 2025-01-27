import express from 'express';
import { client } from '../bitcoin';

const router = express.Router();

// Detalhes de um endereço específico
router.get('/:address', async (req, res) => {
  try {
    const { address } = req.params;

    // Obtém UTXOs associados ao endereço
    const utxos = await client.command('listunspent', 0, 9999999, [address]);
    const balance = utxos.reduce((sum: number, utxo: { amount: number }) => sum + utxo.amount, 0);

    res.json({ address, balance, utxos });
  } catch (error) {
    console.error('Error fetching address details:', error);
    res.status(500).json({ error: 'Error fetching address details' });
  }
});

export default router;
