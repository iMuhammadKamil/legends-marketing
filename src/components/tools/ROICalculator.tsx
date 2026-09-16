"use client";

import { useState } from "react";
import ToolDisclaimer from "./ToolDisclaimer";

export default function ROICalculator() {
  const [investment, setInvestment] = useState(5000000);
  const [years, setYears] = useState(5);
  const [growth, setGrowth] = useState(10);

  const futureValue = investment * Math.pow(1 + growth / 100, years);
  const capitalGain = futureValue - investment;
  const roi = (capitalGain / investment) * 100;

  return (
    <div className="tool-calculator">
      <label>
        Investment Amount (PKR)
        <input
          type="number"
          value={investment}
          onChange={(e) => setInvestment(Number(e.target.value))}
        />
      </label>
      <label>
        Holding Period (Years)
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
        />
      </label>
      <label>
        Expected Annual Growth (%)
        <input
          type="number"
          value={growth}
          onChange={(e) => setGrowth(Number(e.target.value))}
        />
      </label>
      <div className="tool-results">
        <p>Estimated Future Value: PKR {Math.round(futureValue).toLocaleString()}</p>
        <p>Estimated Capital Gain: PKR {Math.round(capitalGain).toLocaleString()}</p>
        <p>Estimated ROI: {roi.toFixed(1)}%</p>
      </div>
      <ToolDisclaimer />
    </div>
  );
}