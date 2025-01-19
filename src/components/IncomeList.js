// src/components/IncomeList.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IncomeList = ({ incomes, deleteIncome, editIncome }) => {
  const [editing, setEditing] = useState(null);
  const [editData, setEditData] = useState({ source: "", amount: "" });

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editIncome(editing, { ...editData, amount: Number(editData.amount) });
    setEditing(null);
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="my-8">
      <h3 className="text-xl font-semibold text-center mb-4">Income Sources</h3>
      <ul className="list-disc list-inside">
        <AnimatePresence>
          {incomes.map((income) =>
            editing === income.id ? (
              <motion.form
                key={income.id}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                onSubmit={handleEditSubmit}
                className="mb-4 flex space-x-4"
              >
                <input
                  type="text"
                  value={editData.source}
                  onChange={(e) => setEditData({ ...editData, source: e.target.value })}
                  className="border rounded-lg px-2 py-1"
                  placeholder="Source"
                />
                <input
                  type="number"
                  value={editData.amount}
                  onChange={(e) => setEditData({ ...editData, amount: e.target.value })}
                  className="border rounded-lg px-2 py-1"
                  placeholder="Amount"
                />
                <button type="submit" className="bg-green-500 text-white px-4 py-1 rounded-lg">
                  Save
                </button>
                <button
                  onClick={() => setEditing(null)}
                  className="bg-gray-500 text-white px-4 py-1 rounded-lg"
                >
                  Cancel
                </button>
              </motion.form>
            ) : (
              <motion.li
                key={income.id}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                className="mb-4 flex justify-between items-center"
              >
                <span>
                  {income.source}: ${income.amount.toFixed(2)}
                </span>
                <div className="space-x-2">
                  <button
                    onClick={() => {
                      setEditing(income.id);
                      setEditData({ source: income.source, amount: income.amount });
                    }}
                    className="bg-blue-500 text-white px-4 py-1 rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteIncome(income.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </motion.li>
            )
          )}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default IncomeList;
