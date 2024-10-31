import React, { useEffect, useState } from 'react';

const Sidebar = () => {
  const [cryptoData, setCryptoData] = useState([]);
  
  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then(response => response.json())
      .then(data => setCryptoData(data));
  }, []);

  return (
    <div className="bg-gray-800 text-white p-4 w-64">
      <h2 className="text-lg font-bold mb-4">Nifty/Sensex</h2>
      <div className="mb-4">
        <p>NIFTY <span className="text-green-500">+0.09%</span></p>
        <p>SENSEX <span className="text-red-500">+0.08%</span></p>
      </div>
      <h2 className="text-lg font-bold mb-4">Cryptocurrencies</h2>
      {cryptoData.slice(0, 5).map(crypto => (
        <div key={crypto.id} className="flex justify-between py-1">
          <p>{crypto.name}</p>
          <p>${crypto.current_price}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
