// src/pages/Wallet.tsx
import { useState } from "react";

const Wallet = () => {
  const [walletName, setWalletName] = useState("");
  const [newAddress, setNewAddress] = useState("");

  const createWallet = async () => {
    await fetch("http://localhost:3001/api/wallet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ walletName }),
    });
    // Você pode colocar um alerta de sucesso se quiser
  };

  const generateAddress = async () => {
    const response = await fetch(
      `http://localhost:3001/api/wallet/${walletName}/newaddress`,
      { method: "POST" }
    );
    const data = await response.json();
    setNewAddress(data.newAddress);
  };

  return (
    <section>
      <h1 className="text-3xl font-semibold mb-6">Bitcoin Wallet</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Wallet name"
            value={walletName}
            onChange={(e) => setWalletName(e.target.value)}
            className="p-2 bg-gray-700 border border-gray-600 rounded w-full md:w-auto"
          />
          <button
            onClick={createWallet}
            className="bg-btcOrange px-4 py-2 rounded text-black font-semibold hover:opacity-90 transition"
          >
            Create Wallet
          </button>
        </div>

        <div className="mt-6 p-4 border border-gray-700 rounded">
          <p className="text-gray-400 text-sm">Generated Wallet Address:</p>
          <p className="text-btcOrange font-medium break-all">
            {newAddress || "No address generated yet"}
          </p>
          <button
            onClick={generateAddress}
            className="mt-2 bg-btcOrange px-4 py-2 rounded text-black font-semibold hover:opacity-90 transition"
          >
            Generate Address
          </button>
        </div>
      </div>
    </section>
  );
};

export default Wallet;
