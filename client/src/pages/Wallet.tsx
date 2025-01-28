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
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-blue-400">Bitcoin Wallets</h2>

      <div className="flex gap-4 mt-4">
        <input
          type="text"
          placeholder="Wallet name"
          value={walletName}
          onChange={(e) => setWalletName(e.target.value)}
          className="p-2 bg-gray-800 border border-gray-700 rounded"
        />
        <button
          onClick={createWallet}
          className="bg-green-600 px-4 py-2 rounded"
        >
          Create Wallet
        </button>
      </div>

      <div className="mt-6 p-4 border border-gray-700 rounded">
        <p className="text-gray-400">Wallet Address:</p>
        <p className="text-green-300">{newAddress || "No address generated"}</p>
        <button
          onClick={generateAddress}
          className="mt-2 bg-green-600 px-4 py-2 rounded"
        >
          Generate Address
        </button>
      </div>
    </div>
  );
};

export default Wallet;
//