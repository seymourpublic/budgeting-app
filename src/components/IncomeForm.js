import React, { useState } from "react";

const IncomeForm = ({ addIncome }) => {
  const [income, setIncome] = useState({ source: "", amount: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome({ ...income, amount: Number(income.amount) });
    setIncome({ source: "", amount: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="my-6 text-center">
      <div className="flex justify-center space-x-4">
        <input
          type="text"
          placeholder="Income Source"
          value={income.source}
          onChange={(e) => setIncome({ ...income, source: e.target.value })}
          required
          className="border rounded-lg px-4 py-2 w-64"
        />
        <input
          type="number"
          placeholder="Amount"
          value={income.amount}
          onChange={(e) => setIncome({ ...income, amount: e.target.value })}
          required
          className="border rounded-lg px-4 py-2 w-32"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Income
        </button>
      </div>
    </form>
  );
};

export default IncomeForm;