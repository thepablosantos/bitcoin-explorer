import { useEffect, useState } from "react";

const Dashboard = () => {
  const [blockchainInfo, setBlockchainInfo] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/info")
      .then((res) => res.json())
      .then((data) => setBlockchainInfo(data))
      .catch((err) => console.error("Error fetching blockchain info", err));
  }, []);

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-green-400">Dashboard</h2>
      <p className="text-gray-400 mt-2">Informações gerais da blockchain:</p>
      {blockchainInfo ? (
        <pre className="bg-gray-800 p-4 rounded-md mt-4 text-sm">
          {JSON.stringify(blockchainInfo, null, 2)}
        </pre>
      ) : (
        <p className="text-gray-500">Carregando dados...</p>
      )}
    </div>
  );
};

export default Dashboard;
