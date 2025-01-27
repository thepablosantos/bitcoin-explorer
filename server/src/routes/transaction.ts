import express from 'express';
import { client } from '../bitcoin';

const router = express.Router();

// Obter UTXOs disponíveis para uma carteira
router.get('/:walletName/utxos', async (req, res) => {
  try {
    const { walletName } = req.params;

    // Verifica se a carteira está carregada
    const loadedWallets = await client.command('listwallets');
    if (!loadedWallets.includes(walletName)) {
      await client.command('loadwallet', walletName);
    }

    // Obtém os UTXOs disponíveis
    const utxos = await client.command('listunspent');
    res.json({ walletName, utxos });
  } catch (error) {
    console.error('Error fetching UTXOs:', error);
    res.status(500).json({ error: 'Error fetching UTXOs' });
  }
});

// Montar e assinar uma transação
router.post('/:walletName/create', async (req, res) => {
  try {
    const { walletName } = req.params;
    const { inputs, outputs } = req.body;

    if (!inputs || !outputs) {
      return res.status(400).json({ error: 'Inputs and outputs are required' });
    }

    // Verifica se a carteira está carregada
    const loadedWallets = await client.command('listwallets');
    if (!loadedWallets.includes(walletName)) {
      await client.command('loadwallet', walletName);
    }

    // Montar a transação
    const rawTransaction = await client.command('createrawtransaction', inputs, outputs);

    // Assinar a transação
    const signedTransaction = await client.command('signrawtransactionwithwallet', rawTransaction);

    res.json({ walletName, signedTransaction });
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(500).json({ error: 'Error creating transaction' });
  }
});

// Transmitir uma transação
router.post('/:walletName/send', async (req, res) => {
  try {
    const { walletName } = req.params;
    const { hex } = req.body;

    if (!hex) {
      return res.status(400).json({ error: 'Raw transaction hex is required' });
    }

    // Verifica se a carteira está carregada
    const loadedWallets = await client.command('listwallets');
    if (!loadedWallets.includes(walletName)) {
      await client.command('loadwallet', walletName);
    }

    // Transmitir a transação
    const txid = await client.command('sendrawtransaction', hex);

    res.json({ walletName, txid });
  } catch (error) {
    console.error('Error broadcasting transaction:', error);
    res.status(500).json({ error: 'Error broadcasting transaction' });
  }
});

export default router;
