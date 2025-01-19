// src/components/SavingsGoals.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SavingsGoals = ({ savingsGoals, addSavingsGoal, deleteSavingsGoal, income, expenses }) => {
  const [newGoal, setNewGoal] = useState({ name: "", target: "", endDate: "" });

  // Calculate progress for each goal
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const availableSavings = income - totalExpenses;

  useEffect(() => {
    savingsGoals.forEach((goal) => {
      const progress = Math.min((availableSavings / goal.target) * 100, 100).toFixed(2);
      goal.progress = isNaN(progress) ? 0 : progress;
    });
  }, [availableSavings, savingsGoals]);

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (!newGoal.name || !newGoal.target || !newGoal.endDate) {
      alert("Please fill in all fields.");
      return;
    }
    addSavingsGoal({ ...newGoal, target: Number(newGoal.target), progress: 0 });
    setNewGoal({ name: "", target: "", endDate: "" });
  };

  return (
    <div className="my-6">
      <h3 className="text-2xl font-semibold mb-4 text-center">Savings Goals</h3>

      <form onSubmit={handleAddGoal} className="flex flex-col items-center space-y-4">
        <input
          type="text"
          placeholder="Goal Name"
          value={newGoal.name}
          onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
          className="border rounded-lg px-4 py-2 w-64"
          required
        />
        <input
          type="number"
          placeholder="Target Amount"
          value={newGoal.target}
          onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
          className="border rounded-lg px-4 py-2 w-64"
          required
        />
        <input
          type="date"
          value={newGoal.endDate}
          onChange={(e) => setNewGoal({ ...newGoal, endDate: e.target.value })}
          className="border rounded-lg px-4 py-2 w-64"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Goal
        </button>
      </form>

      <div className="mt-8">
        <h4 className="text-xl font-semibold mb-4">Active Goals</h4>
        <AnimatePresence>
          {savingsGoals.map((goal) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-lg shadow-md p-4 mb-4"
            >
              <h5 className="font-medium text-lg">{goal.name}</h5>
              <p>
                <strong>Target:</strong> ${goal.target.toFixed(2)}
              </p>
              <p>
                <strong>End Date:</strong> {goal.endDate}
              </p>
              <p>
                <strong>Progress:</strong> {goal.progress}%
              </p>
              <div className="relative w-full h-4 bg-gray-300 rounded-lg mt-4">
                <div
                  className="absolute top-0 left-0 h-full bg-green-500 rounded-lg"
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
              {goal.progress >= 100 ? (
                <p className="text-green-600 mt-4 font-semibold">
                  🎉 Goal Achieved!
                </p>
              ) : (
                <p className="text-gray-600 mt-4">
                  Keep saving! You’re {goal.progress}% of the way there.
                </p>
              )}
              <button
                onClick={() => deleteSavingsGoal(goal.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-red-600"
              >
                Delete Goal
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SavingsGoals;
