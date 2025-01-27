import { Request, Response } from 'express';
import { client } from '../bitcoin';

// Criar novo endereço
export const createNewAddress = async (req: Request, res: Response) => {
  try {
    const address = await client.command('getnewaddress');
    res.json({ address });
  } catch (error) {
    console.error('Error creating new address:', error);
    res.status(500).json({ error: 'Failed to create address' });
  }
};

// Obter saldo
export const getWalletBalance = async (req: Request, res: Response) => {
  try {
    const balance = await client.command('getbalance');
    res.json({ balance });
  } catch (error) {
    console.error('Error fetching balance:', error);
    res.status(500).json({ error: 'Failed to fetch balance' });
  }
};

// Enviar BTC
export const sendBitcoin = async (req: Request, res: Response) => {
  try {
    const { address, amount } = req.body;
    const txid = await client.command('sendtoaddress', address, parseFloat(amount));
    res.json({ txid });
  } catch (error) {
    console.error('Error sending BTC:', error);
    res.status(500).json({ error: 'Transaction failed' });
  }
};
