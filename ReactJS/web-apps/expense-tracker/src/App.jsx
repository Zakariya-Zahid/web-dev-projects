import React, { useState } from "react";
import useLocalStorage from "./hooks/LocalStorage";
const App = () => {
  const [currentBalance, setCurrentBalance] = useState(3200);
  const [income, setIncome] = useState(4200);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useLocalStorage("transactions", []);
  const [transactionTitle, setTransactionTitle] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [transactionCategory, setTransactionCategory] = useState("");
  const incomeCount = transactions.filter(
    (transaction) => transaction.type === "Income"
  ).length;
  const expenseCount = transactions.filter(
    (transaction) => transaction.type === "Expense"
  ).length;
  const addTransaction = () => {
    if (!transactionTitle.trim() || !transactionAmount || !transactionDate)
      return;

    const amount = parseFloat(transactionAmount);

    if (transactionType === "Expense" && amount > currentBalance) {
      alert("Not enough balance to make transaction!");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      title: transactionTitle,
      category: transactionCategory,
      date: transactionDate,
      amount,
      type: transactionType,
    };

    // Update transactions
    setTransactions((prev) => [...prev, newTransaction]);

    // Update balances correctly
    if (transactionType === "Expense") {
      setExpense((prev) => prev + amount);
      setCurrentBalance((prev) => prev - amount);
    }
    if (transactionType === "Income") {
      setIncome((prev) => prev + amount);
      setCurrentBalance((prev) => prev + amount);
    }

    clearTransactionInputs();
  };

  const clearTransactionInputs = () => {
    setTransactionTitle("");
    setTransactionAmount("");
    setTransactionDate("");
    setTransactionType("");
    setTransactionCategory("");
  };

  const getCategoryIcon = (category) => {
    const iconMap = {
      food: "🍔",
      transport: "🚌",
      rent: "🏠",
      shopping: "🛒",
      salary: "💼",
    };
    return iconMap[category.toLowerCase()] || "💰";
  };
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-4xl p-6">
        {/* <!-- Header --> */}
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Expense Tracker
            </h1>
            <p className="text-sm text-slate-500">
              Minimal UI • No functionality
            </p>
          </div>
        </header>

        {/* <!-- Balance & Summary --> */}
        <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="col-span-1 rounded-2xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Current Balance</p>
            <p className="mt-1 text-3xl font-semibold">${currentBalance}</p>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Income</p>
            <p className="mt-1 text-xl font-semibold text-emerald-600">
              ${income}
            </p>
            <p className="mt-2 text-xs text-slate-500">
              {incomeCount} transactions
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Expenses</p>
            <p className="mt-1 text-xl font-semibold text-rose-600">
              ${expense}
            </p>
            <p className="mt-2 text-xs text-slate-500">
              {expenseCount} transactions
            </p>
          </div>
        </section>

        {/* <!-- Add Transaction (Static) --> */}
        <section className="mb-6 rounded-2xl border bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Add Transaction</h2>
          <form action="#" className="grid grid-cols-1 gap-3 md:grid-cols-6">
            <input
              type="text"
              value={transactionTitle}
              onChange={(e) => setTransactionTitle(e.target.value)}
              placeholder="Title (e.g., Groceries)"
              className="md:col-span-2 rounded-xl border px-3 py-2 text-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-slate-900"
            />
            <input
              type="number"
              value={transactionAmount}
              onChange={(e) => setTransactionAmount(e.target.value)}
              placeholder="Amount"
              className="md:col-span-1 rounded-xl border px-3 py-2 text-sm outline-none placeholder:text-slate-400 focnullus:ring-2 focus:ring-slate-900"
            />
            <input
              type="date"
              value={transactionDate}
              onChange={(e) => setTransactionDate(e.target.value)}
              className="md:col-span-1 rounded-xl border px-3 py-2 text-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-slate-900"
            />
            <select
              required
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
              className="md:col-span-1 rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900"
            >
              <option value="">Select Type</option>
              <option value="Expense">Expense</option>
              <option value="Income">Income</option>
            </select>

            {/* Transaction Category */}
            <select
              required
              value={transactionCategory}
              onChange={(e) => setTransactionCategory(e.target.value)}
              className="md:col-span-1 rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900"
            >
              <option value="">Category</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Rent">Rent</option>
              <option value="Shopping">Shopping</option>
              <option value="Salary">Salary</option>
            </select>

            <div className="md:col-span-6 flex items-center justify-end gap-2 pt-1">
              <button
                type="reset"
                onClick={clearTransactionInputs}
                className="rounded-xl border px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
              >
                Clear
              </button>
              <button
                onClick={addTransaction}
                type="button"
                className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm"
              >
                Add
              </button>
            </div>
          </form>
        </section>

        {/* <!-- Transactions List (Static) --> */}
        <section className="rounded-2xl border bg-white shadow-sm">
          <div className="grid grid-cols-12 border-b p-4 text-xs font-medium text-slate-500">
            <div className="col-span-5">Title</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-2 text-right">Amount</div>
            <div className="col-span-1 text-right">Type</div>
          </div>

          {/* <!-- Row --> */}
          {transactions.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              <p>No transactions yet. Add your first transaction above!</p>
            </div>
          ) : (
            <ul className="divide-y">
              {transactions.map((row) => (
                <li key={row.id} className="grid grid-cols-12 items-center p-4">
                  <div className="col-span-5 flex items-center gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-slate-100 text-slate-500">
                      {getCategoryIcon(row.category)}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{row.title}</p>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <span className="rounded-lg bg-slate-100 px-2 py-1 text-xs">
                      {row.category}
                    </span>
                  </div>
                  <div className="col-span-2 text-sm text-slate-600">
                    {row.date}
                  </div>
                  <div
                    className={`col-span-2 text-right text-sm font-medium ${
                      row.type === "Income"
                        ? "text-emerald-600"
                        : "text-rose-600"
                    }`}
                  >
                    ${row.amount.toFixed(2)}
                  </div>
                  <div
                    className={`col-span-1 text-right text-xs ${
                      row.type === "Income"
                        ? "text-emerald-600"
                        : "text-rose-600"
                    }`}
                  >
                    {row.type}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* <!-- Footer --> */}
        <footer className="mt-6 flex items-center justify-between text-xs text-slate-500">
          <p>© 2025 Expense Tracker</p>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-slate-700">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-700">
              Terms
            </a>
            <a href="#" className="hover:text-slate-700">
              About
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
