// ElfsightWidget.jsx
import React, { useEffect } from 'react';

const ElfsightWidget = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    
    // Append script to document
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div 
      className="elfsight-app-7b496f0c-6963-4409-b2dc-cea1b198bdbc" 
      data-elfsight-app-lazy
    ></div>
  );
};

export default ElfsightWidget;