// src/pages/Mining.tsx
import { useState } from "react";

const Mining = () => {
  const [blocks, setBlocks] = useState(1);
  const [minedBlocks, setMinedBlocks] = useState([]);

  const mineBlocks = async () => {
    const response = await fetch("http://localhost:3001/api/mine", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ blocks }),
    });
    const data = await response.json();
    setMinedBlocks(data.minedBlocks || []);
  };

  return (
    <section>
      <h1 className="text-3xl font-semibold mb-6">Bitcoin Mining</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <p className="text-gray-300 mb-2">Number of blocks to mine:</p>
        <div className="flex items-center space-x-4">
          <input
            type="number"
            value={blocks}
            onChange={(e) => setBlocks(Number(e.target.value))}
            className="p-2 bg-gray-700 border border-gray-600 rounded"
          />
          <button
            onClick={mineBlocks}
            className="bg-btcOrange px-4 py-2 rounded text-black font-semibold hover:opacity-90 transition"
          >
            Start Mining
          </button>
        </div>

        {minedBlocks.length > 0 && (
          <pre className="bg-gray-900 p-4 rounded-md mt-4 text-sm">
            {JSON.stringify(minedBlocks, null, 2)}
          </pre>
        )}
      </div>
    </section>
  );
};

export default Mining;
