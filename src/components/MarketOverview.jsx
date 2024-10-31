import React from 'react'

function MarketOverview() {
  return (
    <div className="h-[400px] bg-[#1A1C4D] rounded-lg shadow-lg p-4">
      <div className="tradingview-widget-container h-full">
        <div className="tradingview-widget-container__widget h-full"></div>
        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "colorTheme": "dark",
              "dateRange": "12M",
              "showChart": true,
              "locale": "en",
              "width": "100%",
              "height": "100%",
              "largeChartUrl": "",
              "isTransparent": false,
              "showSymbolLogo": true,
              "showFloatingTooltip": false,
              "tabs": [
                {
                  "title": "Indices",
                  "symbols": [
                    { "s": "BSE:SENSEX" },
                    { "s": "NSE:NIFTY" },
                    { "s": "FOREXCOM:SPXUSD" },
                    { "s": "FOREXCOM:NSXUSD" },
                    { "s": "FOREXCOM:DJI" }
                  ]
                },
                {
                  "title": "Commodities",
                  "symbols": [
                    { "s": "MCX:GOLD1!" },
                    { "s": "MCX:SILVER1!" },
                    { "s": "NYMEX:CL1!" },
                    { "s": "MCX:COPPER1!" }
                  ]
                },
                {
                  "title": "Crypto",
                  "symbols": [
                    { "s": "BINANCE:BTCUSDT" },
                    { "s": "BINANCE:ETHUSDT" },
                    { "s": "BINANCE:BNBUSDT" },
                    { "s": "BINANCE:SOLUSDT" }
                  ]
                }
              ]
            })
          }}
        />
      </div>
    </div>
  );
}

export default MarketOverview