import React, { useState } from "react";
import Header from "./components/Header";
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";
import BudgetSummary from "./components/BudgetSummary";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import CategoryPieChart from "./components/CategoryPieChart";
import ExpensesLineChart from "./components/ExpensesLineChart";
import SavingsGoals from "./components/SavingsGoal";
import Hero from "./components/Hero";
import ExportData from "./components/ExportData";

function App() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const addIncome = (income) => {
    setIncomes([...incomes, income]);
  };

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteIncome = (id) => {
    setIncomes(incomes.filter((income) => income.id !== id));
  };

  const editIncome = (id, updatedIncome) => {
    setIncomes(
      incomes.map((income) => (income.id === id ? { ...income, ...updatedIncome } : income))
    );
  };

  const [savingsGoals, setSavingsGoals] = useState([]); // Array of savings goals

  const addSavingsGoal = (goal) => {
    setSavingsGoals([...savingsGoals, { ...goal, id: Date.now() }]); // Add unique ID to goals
  };

  const deleteSavingsGoal = (id) => {
    setSavingsGoals(savingsGoals.filter((goal) => goal.id !== id)); // Remove goal by ID
  };

  const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <main className="container mx-auto p-6">
        <IncomeForm addIncome={addIncome} />
        <IncomeList incomes={incomes} deleteIncome={deleteIncome} editIncome={editIncome} />
        <SavingsGoals
          savingsGoals={savingsGoals}
          addSavingsGoal={addSavingsGoal}
          deleteSavingsGoal={deleteSavingsGoal}
          income={incomes}
          expenses={expenses}
        />
        <BudgetSummary income={totalIncome} expenses={expenses} />
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} />
        <CategoryPieChart expenses={expenses} />
        <ExpensesLineChart expenses={expenses} />
        <ExportData data={incomes} type="Income" />
        <ExportData data={expenses} type="Expense" />
      </main>
    </div>
  );
}

export default App;