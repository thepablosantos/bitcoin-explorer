import express from 'express';
import { client } from '../bitcoin';

const router = express.Router();

// Endpoint para buscar uma transação pelo txid
router.get('/:txid', async (req, res) => {
  try {
    const { txid } = req.params;

    // Recupera os dados brutos da transação
    const rawTransaction = await client.command('getrawtransaction', txid);

    // Decodifica os dados da transação
    const decodedTransaction = await client.command('decoderawtransaction', rawTransaction);

    res.json({ txid, transaction: decodedTransaction });
  } catch (error) {
    console.error('Error fetching transaction:', error);
    res.status(500).json({ error: 'Error fetching transaction details' });
  }
});

export default router;
