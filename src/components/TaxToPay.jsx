import React, { useState } from "react";
import "./tax.css";

export const TaxToPay = () => {
  const [tax, setTax] = useState("");
  const [amount, setAmount] = useState(null);
  const [monthly, setMonthly] = useState(null);

  const taxToGo = (e) => {
    let amountt = 0;
    let amountT = 0;

    e.preventDefault();

    if (tax * 12 < 600000) {
      setAmount(0);
      setMonthly(0);
    } else if (tax * 12 <= 1200000) {
      amountt = tax * 12 - 600000;
      amountT = (amountt * 5) / 100;
      setMonthly(amountT * 12);
      setAmount(amountT);
    } else if (tax * 12 <= 1800000) {
      amountt = tax * 12 - 1200000;
      amountT = 30000 + (amountt * 10) / 100;
      setAmount(amountT);
      setMonthly(amountT / 12);
    } else if (tax * 12 <= 2500000) {
      amountt = tax * 12 - 1800000;
      amountT = 90000 + (amountt * 15) / 100;
      setAmount(amountT);
      setMonthly(amountT / 12);
    } else if (tax * 12 <= 3500000) {
      amountt = tax * 12 - 2500000;
      amountT = 195000 + (amountt * 17.5) / 100;
      setAmount(amountT);
      setMonthly(amountT / 12);
    } else if (tax * 12 <= 5000000) {
      amountt = tax * 12 - 3500000;
      amountT = 350000 + (amountt * 20) / 100;
      setAmount(amountT);
      setMonthly(amountT / 12);
    } else if (tax * 12 <= 8000000) {
      amountt = tax * 12 - 5000000;
      amountT = 670000 + (amountt * 22.5) / 100;
      setAmount(amountT);
      setMonthly(amountT / 12);
    } else if (tax * 12 <= 12000000) {
      amountt = tax * 12 - 8000000;
      amountT = 1345000 + (amountt * 25) / 100;
      setAmount(amountT);
      setMonthly(amountT / 12);
    } else if (tax * 12 <= 30000000) {
      amountt = tax * 12 - 12000000;
      amountT = 2345000 + (amountt * 27.5) / 100;
      setAmount(amountT);
      setMonthly(amountT / 12);
    } else if (tax * 12 <= 50000000) {
      amountt = tax * 12 - 30000000;
      amountT = 7295000 + (amountt * 30) / 100;
      setAmount(amountT);
      setMonthly(amountT / 12);
    } else if (tax * 12 <= 75000000) {
      amountt = tax * 12 - 50000000;
      amountT = 13295000 + (amountt * 32.5) / 100;
      setAmount(amountT);
      setMonthly(amountT / 12);
    } else if (tax * 12 > 30000000) {
      amountt = tax * 12 - 75000000;
      amountT = 21420000 + (amountt * 35) / 100;
      setAmount(amountT);
      setMonthly(amountT / 12);
    }
  };
  return (
    <div className="content">
      <form onSubmit={taxToGo}>
        <h1>Tax Calculator</h1>
        <br />
        <br />

        <div>
          <h4>Enter your Monthly pay</h4>
          <input
            type="Number"
            value={tax}
            onChange={(e) => setTax(e.target.value)}
          />
        </div>
        <br />
        <button className="button">Enter</button>
      </form>
      <br />

      <div>
        {monthly !=null ? <h4>Your monthly tax is {monthly}.</h4> : ""}
      </div>
      <br />
      <div>
        {amount != null ? <h4>While your yearly tax is {amount}.</h4> : ""}
      </div>
    </div>
  );
};
