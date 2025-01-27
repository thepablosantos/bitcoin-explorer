import Client from 'bitcoin-core';

export const client = new Client({
  network: 'regtest',
  host: '127.0.0.1',
  port: 18443,
  username: 'usuario',
  password: 'senhasegura',
});
