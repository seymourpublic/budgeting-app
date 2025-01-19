import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryPieChart = ({ expenses }) => {
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: ["#4CAF50", "#2196F3", "#F44336", "#FFC107", "#9C27B0"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: $${context.raw.toFixed(2)}`,
        },
      },
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="my-6">
      <h3 className="text-xl font-semibold text-center mb-4">Expense Distribution</h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default CategoryPieChart;