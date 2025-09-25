// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget2() {
  const container = useRef();

  useEffect(() => {
    // Clear any existing content to prevent duplicates
    if (container.current) {
      container.current.innerHTML = '';
    }

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "colorTheme": "dark",
        "locale": "en",
        "largeChartUrl": "",
        "isTransparent": false,
        "showSymbolLogo": true,
        "backgroundColor": "#0F0F0F",
        "support_host": "https://www.tradingview.com",
        "width": "100%",
        "height": 240,
        "symbolsGroups": [
          {
            "name": "Forex",
            "symbols": [
              {
                "name": "BLACKBULL:US30",
                "displayName": ""
              },
              {
                "name": "NYSE:DIS",
                "displayName": ""
              },
              {
                "name": "NYSE:GE",
                "displayName": ""
              },
              {
                "name": "NYSE:HD",
                "displayName": ""
              },
              {
                "name": "NYSE:NKE",
                "displayName": ""
              }
            ]
          }
        ]
      }`;
    
    if (container.current) {
      container.current.appendChild(script);
    }

    // Cleanup function to remove script when component unmounts
    return () => {
      if (container.current && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []); // Empty dependency array ensures this only runs once

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget2);