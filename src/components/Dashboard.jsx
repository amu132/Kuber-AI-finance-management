import React from 'react';
import Chart from './Chart';
import Wallet from './Wallet';
import TradeHistory from './TradeHistory';
import Portfolio from './Portfolio';

const Dashboard = () => {
  return (
    <div className="p-4 flex-1">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Wallet />
        <div className="col-span-2">
          <Chart />
        </div>
      </div>
      
      <TradeHistory />
    </div>
  );
};

export default Dashboard;
