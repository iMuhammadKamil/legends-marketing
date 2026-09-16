"use client";

import { useState } from "react";
import ToolDisclaimer from "./ToolDisclaimer";

export default function BudgetCalculator() {
  const [savings, setSavings] = useState(5000000);
  const [monthlyIncome, setMonthlyIncome] = useState(500000);
  const [monthlySavings, setMonthlySavings] = useState(150000);

  const recommendedBudget = savings + monthlySavings * 24;

  return (
    <div className="tool-calculator">
      <label>
        Available Savings (PKR)
        <input
          type="number"
          value={savings}
          onChange={(e) => setSavings(Number(e.target.value))}
        />
      </label>
      <label>
        Monthly Income (PKR)
        <input
          type="number"
          value={monthlyIncome}
          onChange={(e) => setMonthlyIncome(Number(e.target.value))}
        />
      </label>
      <label>
        Monthly Savings Capacity (PKR)
        <input
          type="number"
          value={monthlySavings}
          onChange={(e) => setMonthlySavings(Number(e.target.value))}
        />
      </label>
      <div className="tool-results">
        <p>
          Recommended Investment Budget (2-year horizon): PKR{" "}
          {recommendedBudget.toLocaleString()}
        </p>
      </div>
      <ToolDisclaimer />
    </div>
  );
}