import React from "react";

const categories = {
  Groceries: "bg-green-500",
  Transport: "bg-blue-500",
  Rent: "bg-red-500",
  Entertainment: "bg-yellow-500",
  Utilities: "bg-purple-500",
};

const BudgetSummary = ({ income, expenses }) => {
  // Calculate total expenses
  const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0);

  // Calculate remaining budget
  const remaining = income - totalExpenses;

  // Calculate totals by category
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  return (
    <div className="text-center my-6">
      <h2 className="text-2xl font-semibold">Budget Summary</h2>
      <p className="mt-2">
        <strong>Income:</strong> ${income.toFixed(2)}
      </p>
      <p>
        <strong>Total Expenses:</strong> ${totalExpenses.toFixed(2)}
      </p>
      <p>
        <strong>Remaining Balance:</strong> ${remaining.toFixed(2)}
      </p>

      {/* Category Summaries */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Category Breakdown</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {Object.entries(categoryTotals).map(([category, total]) => (
            <div
              key={category}
              className={`p-4 rounded-lg shadow-md text-white ${categories[category]}`}
            >
              <h4 className="font-medium text-lg">{category}</h4>
              <p className="text-xl font-semibold">${total.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetSummary;