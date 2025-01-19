import React from "react";

const categories = {
  Groceries: "bg-green-500",
  Transport: "bg-blue-500",
  Rent: "bg-red-500",
  Entertainment: "bg-yellow-500",
  Utilities: "bg-purple-500",
};

const ExpenseList = ({ expenses }) => {
  return (
    <div className="my-8">
      <h3 className="text-2xl font-semibold text-center mb-4">Expenses</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {expenses.map((expense, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 border relative"
          >
            <span
              className={`absolute top-2 right-2 text-xs text-white py-1 px-3 rounded-lg ${categories[expense.category]}`}
            >
              {expense.category}
            </span>
            <h4 className="font-medium text-lg">{expense.name}</h4>
            <p className="text-gray-600">${expense.amount.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;