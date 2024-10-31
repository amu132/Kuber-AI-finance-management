import React from 'react';
import AdvancedChartWidget from './AdvancedChartWidget';

const MarketCharts = () => {
    return (
        <div className="h-[600px] w-full bg-[#1A1C4D] rounded-lg shadow-lg p-4">
            <AdvancedChartWidget
                symbol="BSE:SENSEX"
                interval="W"
                height="800px"
                theme="dark"
                allowSymbolChange={false}
            />
        </div>
    );
};

export default MarketCharts;