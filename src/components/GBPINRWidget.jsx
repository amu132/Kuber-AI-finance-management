import React, { useEffect } from 'react';

const GBPINRWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = 'text/javascript';
    script.async = true;
    
    script.innerHTML = JSON.stringify({
      "symbol": "FX_IDC:GBPINR",
      "width": "100%",
      "height": "100%",
      "locale": "en",
      "dateRange": "60M",
      "colorTheme": "dark",
      "isTransparent": false,
      "autosize": true,
      "largeChartUrl": ""
    });

    const widgetContainer = document.querySelector('.tradingview-widget-container__widget');
    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }

    return () => {
      if (widgetContainer) {
        widgetContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full h-full">
      <div className="tradingview-widget-container h-full">
        <div className="tradingview-widget-container__widget h-full"></div>
        <div className="text-sm mt-2">
          <a 
            href="https://www.tradingview.com/" 
            rel="noopener nofollow" 
            target="_blank"
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            Track all markets on TradingView
          </a>
        </div>
      </div>
    </div>
  );
};

// Example usage in a page or component
const TradingViewPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-900 rounded-lg shadow-lg p-4">
        <h1 className="text-2xl font-bold text-white mb-4">
          GBP/INR Exchange Rate
        </h1>
        <div className="h-[400px] w-full">
          <GBPINRWidget />
        </div>
      </div>
    </div>
  );
};

export default TradingViewPage;