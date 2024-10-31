// TechnicalAnalysis.jsx
const TechnicalAnalysis = ({ symbol = "BSE:SENSEX" }) => {
    return (
      <div className="h-[400px] bg-[#1A1C4D] rounded-lg shadow-lg p-4">
        <div className="tradingview-widget-container h-full">
          <div className="tradingview-widget-container__widget h-full"></div>
          <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "interval": "1D",
                "width": "100%",
                "isTransparent": false,
                "height": "100%",
                "symbol": symbol,
                "showIntervalTabs": true,
                "locale": "en",
                "colorTheme": "dark"
              })
            }}
          />
        </div>
      </div>
    );
  };

  export default TechnicalAnalysis