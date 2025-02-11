// src/pages/Dashboard.tsx
const Dashboard = () => {
  return (
    <section>
      <h1 className="text-3xl font-semibold mb-6">TESTE</h1>

      {/* Cards em grid responsivo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 shadow hover:bg-gray-700 transition">
          <h2 className="text-sm font-bold text-gray-400 uppercase mb-2">Saldo Total</h2>
          <p className="text-2xl font-semibold text-btcOrange">0.1234 BTC</p>
        </div> 

        <div className="bg-gray-800 rounded-lg p-6 shadow hover:bg-gray-700 transition">
          <h2 className="text-sm font-bold text-gray-400 uppercase mb-2">Último Bloco</h2>
          <p className="text-2xl font-semibold">Bloco #765432</p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 shadow hover:bg-gray-700 transition">
          <h2 className="text-sm font-bold text-gray-400 uppercase mb-2">Transações Pendentes</h2>
          <p className="text-2xl font-semibold">12 tx</p>
        </div>
      </div>

      {/* Exemplo de container extra */}
      <div className="mt-8 bg-gray-800 rounded-lg p-6 shadow">
        <h2 className="text-xl font-bold mb-4">Estatísticas Recentes</h2>
        <p className="text-gray-300">
          Aqui você pode inserir um gráfico de blocks/mining, por exemplo.
        </p>
      </div>
    </section>
  );
};

export default Dashboard;
