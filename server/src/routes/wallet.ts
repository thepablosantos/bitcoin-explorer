import express from 'express';
import { client } from '../bitcoin';

const router = express.Router();

// Criar uma nova carteira
router.post('/', async (req, res) => {
  try {
    const { walletName } = req.body;

    if (!walletName) {
      return res.status(400).json({ error: 'Wallet name is required' });
    }

    // Cria a wallet usando o comando createwallet
    await client.command('createwallet', walletName);
    res.status(201).json({ message: `Wallet ${walletName} created successfully` });
  } catch (error) {
    console.error('Error creating wallet:', error);
    res.status(500).json({ error: 'Error creating wallet' });
  }
});

// Obter saldo de uma carteira
router.get('/:walletName/balance', async (req, res) => {
  try {
    const { walletName } = req.params;

    // Verifica se a carteira já está carregada
    const loadedWallets = await client.command('listwallets');
    if (!loadedWallets.includes(walletName)) {
      await client.command('loadwallet', walletName);
    }

    // Obtém o saldo da carteira
    const balance = await client.command('getbalance');
    res.json({ walletName, balance });
  } catch (error) {
    console.error('Error fetching wallet balance:', error);
    res.status(500).json({ error: 'Error fetching wallet balance' });
  }
});

// Listar endereços associados à carteira
router.get('/:walletName/addresses', async (req, res) => {
  try {
    const { walletName } = req.params;

    // Verifica se a carteira já está carregada
    const loadedWallets = await client.command('listwallets');
    if (!loadedWallets.includes(walletName)) {
      await client.command('loadwallet', walletName);
    }

    // Obtém os endereços associados à carteira
    const addresses = await client.command('getaddressesbylabel', '');
    res.json({ walletName, addresses });
  } catch (error) {
    console.error('Error fetching wallet addresses:', error);
    res.status(500).json({ error: 'Error fetching wallet addresses' });
  }
});

export default router;
