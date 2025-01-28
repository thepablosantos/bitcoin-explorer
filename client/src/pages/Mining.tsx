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
    setMinedBlocks(data.minedBlocks);
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-yellow-400">Bitcoin Mining</h2>
      <p className="text-gray-400">Number of blocks to mine:</p>
      <input
        type="number"
        value={blocks}
        onChange={(e) => setBlocks(Number(e.target.value))}
        className="p-2 bg-gray-800 border border-gray-700 rounded mt-2"
      />
      <button onClick={mineBlocks} className="ml-4 bg-green-600 px-4 py-2 rounded">
        Start Mining
      </button>
      {minedBlocks.length > 0 && (
        <pre className="bg-gray-800 p-4 rounded-md mt-4 text-sm">
          {JSON.stringify(minedBlocks, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default Mining;
