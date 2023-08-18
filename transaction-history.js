function updateTransactionHistory(action, amount) {
  let transactionList = document.getElementById("transaction-list");
  let transactionItem = document.createElement("li");
  transactionItem.textContent = `${action} BDT ${amount.toFixed(2)}`;

  // Add classes dynamically
  transactionItem.classList.add("mb-2", "pl-4", "text-lg", "text-gray-600");

  transactionList.appendChild(transactionItem);
}

export { updateTransactionHistory };
