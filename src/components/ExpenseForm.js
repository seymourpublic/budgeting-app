import React, { useState } from "react";

const categories = [
  { name: "Groceries", color: "bg-green-500" },
  { name: "Transport", color: "bg-blue-500" },
  { name: "Rent", color: "bg-red-500" },
  { name: "Entertainment", color: "bg-yellow-500" },
  { name: "Utilities", color: "bg-purple-500" },
];

const ExpenseForm = ({ addExpense }) => {
  const [expense, setExpense] = useState({ name: "", amount: "", category: "", date: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense.category === "" || expense.date === "") {
      alert("Please fill in all fields.");
      return;
    }
    addExpense({ ...expense, amount: Number(expense.amount) });
    setExpense({ name: "", amount: "", category: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="my-6 text-center">
      <div className="flex justify-center space-x-4">
        <input
          type="text"
          placeholder="Expense name"
          value={expense.name}
          onChange={(e) => setExpense({ ...expense, name: e.target.value })}
          required
          className="border rounded-lg px-4 py-2 w-64"
        />
        <input
          type="number"
          placeholder="Amount"
          value={expense.amount}
          onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
          required
          className="border rounded-lg px-4 py-2 w-32"
        />
        <select
          value={expense.category}
          onChange={(e) => setExpense({ ...expense, category: e.target.value })}
          required
          className="border rounded-lg px-4 py-2"
        >
          <option value="" disabled>
            Select Category
          </option>
          {categories.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={expense.date}
          onChange={(e) => setExpense({ ...expense, date: e.target.value })}
          required
          className="border rounded-lg px-4 py-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;