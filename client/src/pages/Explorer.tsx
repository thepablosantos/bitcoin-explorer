const Explorer = () => {
  const blocks = [
    { height: 765432, hash: "000000000abc...", time: "2025-01-01 12:00" },
    { height: 765431, hash: "000000000xyz...", time: "2025-01-01 11:58" },
    // ...
  ];

  return (
    <section>
      <h1 className="text-3xl font-semibold mb-6">Block Explorer</h1>
      <div className="bg-gray-800 rounded-lg p-4 shadow">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-gray-700 text-gray-400 uppercase text-xs">
            <tr>
              <th className="py-2 px-2">Altura</th>
              <th className="py-2 px-2">Hash</th>
              <th className="py-2 px-2">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {blocks.map((block) => (
              <tr
                key={block.height}
                className="border-b border-gray-700 hover:bg-gray-700 transition"
              >
                <td className="py-2 px-2 font-medium">{block.height}</td>
                <td className="py-2 px-2 text-btcOrange">{block.hash}</td>
                <td className="py-2 px-2">{block.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Explorer;
