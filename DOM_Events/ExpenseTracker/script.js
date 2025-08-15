document.addEventListener("DOMContentLoaded", () => {
  let availableBalance = document.getElementById("balance");
  let incomeBalance = document.getElementById("money-plus");
  let expenseBalance = document.getElementById("money-minus");
  let transactionList = document.getElementById("list");
  let transactionTitle = document.getElementById("text");
  let transactionAmount = document.getElementById("amount");
  let addTransactionBtn = document.getElementById("add_transaction");
  let History = JSON.parse(localStorage.getItem("saveTransaction")) || [];
  let income = 1000;
  let balance = income;
  let expense = 0;
  incomeBalance.textContent = `$${balance}`;
  availableBalance.textContent = `$${balance}`;
  expenseBalance.textContent = `$${expense}`;
  renderTransactions();

  addTransactionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let title = transactionTitle.value.trim();
    let amount = parseFloat(transactionAmount.value);

    if (amount <= 0 || !title) return;
    if (!amount) return;
    if (balance < amount) {
      alert(
        "Your available balance is not enough to perform this transaction!"
      );
      return;
    }

    const newTransaction = {
      id: Date.now(),
      title,
      amount,
    };

    History.push(newTransaction);
    console.log(History);
    saveData();

    createTransaction(newTransaction);
    updateBalance();
    transactionTitle.value = "";
    transactionAmount.value = "";
  });

  function createTransaction(transaction) {
    let ListItem = document.createElement("li");
    ListItem.classList.add("minus");
    ListItem.innerHTML = `
    ${transaction.title}<span>-$${transaction.amount}</span>
    <button class="delete-btn">x</button>
  `;
    ListItem.querySelector(".delete-btn").addEventListener("click", () => {
      console.log(ListItem.querySelector(".delete-btn"));
      console.log(transaction.id)
      deleteTransaction(transaction.id);
    });

    transactionList.appendChild(ListItem);
  }

  function updateBalance() {
    let totalExpense = History.reduce((acc, tx) => acc + tx.amount, 0);
    balance = income - totalExpense;

    incomeBalance.textContent = `$${income}`;
    availableBalance.textContent = `$${balance}`;
    expenseBalance.textContent = `$${totalExpense}`;
  }
  function deleteTransaction(id) {
    History = History.filter((tx) => tx.id !== id);
    saveData();
    renderTransactions(); // Re-render the list
  }
  function renderTransactions() {
    transactionList.innerHTML = "";
    History.forEach(createTransaction);
    updateBalance();
  }

  function saveData() {
    localStorage.setItem("saveTransaction", JSON.stringify(History));
  }
});
