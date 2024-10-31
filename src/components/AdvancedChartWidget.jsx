import React, { useEffect, useRef } from 'react';

const AdvancedChartWidget = ({ 
  symbol = "BSE:SENSEX",
  interval = "D",
  timezone = "Etc/UTC",
  theme = "dark",
  style = "1",
  locale = "en",
  allowSymbolChange = true,
  height = "600px"
}) => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": symbol,
      "interval": interval,
      "timezone": timezone,
      "theme": theme,
      "style": style,
      "locale": locale,
      "allow_symbol_change": allowSymbolChange,
      "calendar": false,
      "support_host": "https://www.tradingview.com"
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
  }, [symbol, interval, timezone, theme, style, locale, allowSymbolChange]);

  return (
    <div 
      className="tradingview-widget-container" 
      ref={container}
      style={{ height }}
    >
      <div 
        className="tradingview-widget-container__widget" 
        style={{ height: 'calc(100% - 32px)', width: '100%' }}
      />
      <div className="tradingview-widget-copyright">
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
  );
};

export default AdvancedChartWidget;