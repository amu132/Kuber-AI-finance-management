import React, { useEffect, useRef } from 'react';

const TradingViewWidget = ({ symbol, title }) => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbol": symbol,
      "width": "100%",
      "height": "100%",
      "locale": "en",
      "dateRange": "60M",
      "colorTheme": "dark",
      "isTransparent": false,
      "autosize": true,
      "largeChartUrl": ""
    });

    const widgetContainer = container.current.querySelector('.tradingview-widget-container__widget');
    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }

    return () => {
      if (widgetContainer && script.parentElement) {
        widgetContainer.removeChild(script);
      }
    };
  }, [symbol]);

  return (
    <div className="bg-[#1A1C4D] rounded-lg shadow-lg p-4">
      <h1 className="text-2xl font-bold text-white mb-4">
        {title}
      </h1>
      <div className="h-[200px] w-full">
        <div className="w-full h-full">
          <div className="tradingview-widget-container h-full" ref={container}>
            <div className="tradingview-widget-container__widget h-full"></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingViewWidget;