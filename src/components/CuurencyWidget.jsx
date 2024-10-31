import React from 'react';
import TradingViewWidget from './TradingViewWidget';

const CurrencyWidgets = () => {
  return (
    <div className="container mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
    <TradingViewWidget 
      symbol="FX_IDC:USDINR" 
      title="USD/INR"
      className="h-[200px]" // Add height control
    />
    <TradingViewWidget 
      symbol="FX_IDC:GBPINR" 
      title="GBP/INR"
      className="h-[200px]"
    />
    <TradingViewWidget 
      symbol="FX_IDC:EURINR" 
      title="EUR/INR"
      className="h-[200px]"
    />
    <TradingViewWidget 
      symbol="FX_IDC:CHFINR" 
      title="CHF/INR"
      className="h-[200px]"
    />
    <TradingViewWidget 
      symbol="FX_IDC:INRJPY" 
      title="INR/JPY"
      className="h-[200px]"
    />
    <TradingViewWidget 
      symbol="FX_IDC:CNHINR" 
      title="CNH/INR"
      className="h-[200px]"
    />
    <TradingViewWidget 
      symbol="FX_IDC:SGDINR" 
      title="SGD/INR"
      className="h-[200px]"
    />
    <TradingViewWidget 
      symbol="FX_IDC:AEDINR" 
      title="AED/INR"
      className="h-[200px]"
    />
  </div>
</div>
  );
};

export default CurrencyWidgets;