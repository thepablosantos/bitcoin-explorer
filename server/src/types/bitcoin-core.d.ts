declare module 'bitcoin-core' {
  // calar o ts
  interface BitcoinCoreConfig {
    network?: string;
    host?: string;
    port?: number;
    username?: string;
    password?: string;
  }

  class Client {
    constructor(options: BitcoinCoreConfig);
    command(...args: any[]): Promise<any>;
    getBalance(account?: string, minconf?: number): Promise<number>;
    getBlockchainInfo(): Promise<any>;
    // ... etc.
  }

  export default Client;
}
