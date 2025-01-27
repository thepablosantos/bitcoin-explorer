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
  } catch (err) {
    const error = err as { code?: number; message?: string }; // Fazendo "type assertion"
    if (error.code === -11) {
      return res.json({ walletName: req.params.walletName, addresses: {}, message: 'No addresses found in this wallet.' });
    }
    console.error('Error fetching wallet addresses:', error);
    res.status(500).json({ error: 'Error fetching wallet addresses' });
  }
});

// Criar um novo endereço na carteira
router.post('/:walletName/newaddress', async (req, res) => {
  try {
    const { walletName } = req.params;

    // Verifica se a carteira já está carregada
    const loadedWallets = await client.command('listwallets');
    if (!loadedWallets.includes(walletName)) {
      await client.command('loadwallet', walletName);
    }

    // Gera um novo endereço
    const newAddress = await client.command('getnewaddress');
    res.status(201).json({ walletName, newAddress });
  } catch (error) {
    console.error('Error generating new address:', error);
    res.status(500).json({ error: 'Error generating new address' });
  }
});

export default router;
