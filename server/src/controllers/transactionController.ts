import { Request, Response } from 'express';
import { client } from '../bitcoin';

// Buscar detalhes de uma transação pelo TXID
export const getTransactionById = async (req: Request, res: Response) => {
  try {
    const { txid } = req.params;
    const rawTransaction = await client.command('getrawtransaction', txid, true);
    res.json(rawTransaction);
  } catch (error) {
    console.error('Error fetching transaction:', error);
    res.status(500).json({ error: 'Transaction not found or invalid TXID' });
  }
};
