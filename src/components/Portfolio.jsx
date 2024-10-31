// src/components/Portfolio.jsx
import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchPortfolioData = async () => {
      setLoading(true);
      try {
        // Replace this with an actual API call
        const data = [
          { name: 'Bitcoin', symbol: 'BTC', allocation: 40, value: '$14,000' },
          { name: 'Ethereum', symbol: 'ETH', allocation: 25, value: '$8,000' },
          { name: 'Litecoin', symbol: 'LTC', allocation: 15, value: '$3,000' },
          { name: 'Ripple', symbol: 'XRP', allocation: 10, value: '$2,000' },
          { name: 'ZCash', symbol: 'ZEC', allocation: 10, value: '$1,500' },
        ];
        setPortfolioData(data);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  if (loading) {
    return <div className="text-white">Loading portfolio...</div>;
  }

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-lg font-semibold text-white mb-4">Your Portfolio</h2>
      <div className="space-y-2">
        {portfolioData.map((asset, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="text-white">
              {asset.name} ({asset.symbol})
            </div>
            <div className="text-gray-300">
              {asset.allocation}% - {asset.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
