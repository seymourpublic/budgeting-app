import React from "react";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const ExpensesLineChart = ({ expenses }) => {
  const sortedExpenses = [...expenses].sort((a, b) => new Date(a.date) - new Date(b.date));

  const labels = sortedExpenses.map((expense) => new Date(expense.date).toLocaleDateString());
  const data = sortedExpenses.map((expense) => expense.amount);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Expenses Over Time",
        data,
        borderColor: "#2196F3",
        backgroundColor: "rgba(33, 150, 243, 0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `$${context.raw.toFixed(2)}`,
        },
      },
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    responsive: true,
  };

  return (
    <div className="my-6">
      <h3 className="text-xl font-semibold text-center mb-4">Expenses Over Time</h3>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ExpensesLineChart;