import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const Chart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'BTC Price',
        data: [],
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue',
      },
    ],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch chart data from a free crypto API
    fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const prices = data.prices.map(price => price[1]);
        const dates = data.prices.map(price => new Date(price[0]).toLocaleDateString());
        setChartData({
          labels: dates,
          datasets: [
            {
              label: 'BTC Price',
              data: prices,
              fill: false,
              backgroundColor: 'blue',
              borderColor: 'blue',
            },
          ],
        });
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(err => {
        console.error("Failed to fetch data:", err);
        setError(err); // Set the error state
        setLoading(false); // Also set loading to false in case of error
      });
  }, []);

  // Show loading indicator or error message
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error loading chart data: {error.message}</div>;
  }

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-bold text-white mb-2">BTC/USD Price Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default Chart;
