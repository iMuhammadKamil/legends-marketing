"use client";

import { useState } from "react";
import ToolDisclaimer from "./ToolDisclaimer";

export default function InstallmentCalculator() {
  const [totalPrice, setTotalPrice] = useState(5000000);
  const [downPaymentPct, setDownPaymentPct] = useState(30);
  const [months, setMonths] = useState(36);

  const downPayment = (totalPrice * downPaymentPct) / 100;
  const remaining = totalPrice - downPayment;
  const monthly = remaining / months;

  return (
    <div className="tool-calculator">
      <label>
        Total Price (PKR)
        <input
          type="number"
          value={totalPrice}
          onChange={(e) => setTotalPrice(Number(e.target.value))}
        />
      </label>
      <label>
        Down Payment (%)
        <input
          type="number"
          value={downPaymentPct}
          onChange={(e) => setDownPaymentPct(Number(e.target.value))}
        />
      </label>
      <label>
        Installments (Months)
        <input
          type="number"
          value={months}
          onChange={(e) => setMonths(Number(e.target.value))}
        />
      </label>
      <div className="tool-results">
        <p>Down Payment: PKR {Math.round(downPayment).toLocaleString()}</p>
        <p>Monthly Installment: PKR {Math.round(monthly).toLocaleString()}</p>
      </div>
      <ToolDisclaimer />
    </div>
  );
}