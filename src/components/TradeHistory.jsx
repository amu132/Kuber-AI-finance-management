const TradeHistory = () => (
    <div className="bg-gray-800 p-4 rounded mt-4">
      <h2 className="text-lg font-bold text-white mb-2">Trade History</h2>
      <table className="w-full text-white">
        <thead>
          <tr>
            <th>ID</th>
            <th>Price</th>
            <th>Size</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td>#{index + 1}</td>
              <td>$10400</td>
              <td>0.01 BTC</td>
              <td>14:00</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  export default TradeHistory;
  