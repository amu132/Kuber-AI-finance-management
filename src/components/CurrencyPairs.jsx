import React, { useEffect, useRef } from 'react';
import TradingViewWidget from './TradingViewWidget';
import gsap from 'gsap';

const CurrencyPairs = () => {
  const pairs = [
    { symbol: "FX_IDC:USDINR", title: "USD/INR" },
    { symbol: "FX_IDC:GBPINR", title: "GBP/INR" },
    { symbol: "FX_IDC:EURINR", title: "EUR/INR" },
    { symbol: "FX_IDC:CHFINR", title: "CHF/INR" },
    { symbol: "FX_IDC:JPYINR", title: "JPY/INR" },
    { symbol: "FX_IDC:CNHINR", title: "CNH/INR" },
    { symbol: "FX_IDC:SGDINR", title: "SGD/INR" },
    { symbol: "FX_IDC:AEDINR", title: "AED/INR" },
  ];

  const gridRef = useRef(null);

  useEffect(() => {
    // Animate the grid items when they appear
    gsap.fromTo(gridRef.current.children, { opacity: 0, y: 20 }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3" ref={gridRef}>
      {pairs.map((pair) => (
        <TradingViewWidget 
          key={pair.symbol}
          symbol={pair.symbol} 
          title={pair.title}
          className="h-[200px]"
        />
      ))}
    </div>
  );
};

export default CurrencyPairs;