// News.jsx
import React from 'react';
import CurrencyPairs from './CurrencyPairs';
import MarketOverview from './MarketOverview';
import TechnicalAnalysis from './TechnicalAnalysis';
import MarketCharts from './MarketCharts';
import Footer from './Footer';
function News() {
  return (
    <div className="min-h-screen bg-[#03052F] text-white p-8">
      <div className="container mx-auto space-y-8">
        {/* Currency Pairs Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Currency Exchange Rates</h2>
          <CurrencyPairs />
        </section>
        {/* Main Chart Section */}
        {/* <section>
          <h2 className="text-2xl font-bold mb-4">Market Charts</h2>
          <MarketCharts />
        </section> */}

        

        
      </div>
    </div>
  );
}

export default News;