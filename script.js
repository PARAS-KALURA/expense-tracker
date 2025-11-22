const title = document.getElementById("title");
const amount = document.getElementById("amount");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

// Load from localStorage
let expenses = JSON.parse(localStorage.getItem('storeData')) || [];

// Show saved items on page load
showExpenses();
updateTotal();

btn.addEventListener("click", () => {
  const expenseTitle = title.value.trim();
  const expenseAmount = amount.value.trim();

  if (expenseTitle === "" || expenseAmount === "") {
    alert("Kindly fill both");
    return;
  }

  const newItem = {
    title: expenseTitle,
    amount: Number(expenseAmount)
  };

  // Add to array
  expenses.push(newItem);

  // Save to localStorage
  saveData();

  // Update UI
  showExpenses();
  updateTotal();

  title.value = "";
  amount.value = "";
});

function showExpenses() {
  list.innerHTML = "";

  expenses.forEach((exp, index) => {
    const item = document.createElement("div");
    item.classList.add("item");

    item.innerHTML = `
        <p>${exp.title}</p>
        <p>₹${exp.amount}</p>
        <button class="dltBtn" data-index="${index}">Delete</button>
    `;

    list.appendChild(item);
  });

  // Add delete listeners
  document.querySelectorAll(".dltBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.getAttribute("data-index");

      // Remove from array by index
      expenses.splice(index, 1);

      saveData();
      showExpenses();
      updateTotal();
    });
  });
}

function updateTotal() {
  const totalAmount = expenses.reduce((sum, item) => sum + item.amount, 0);
  const totalItem = expenses.length;

  document.getElementById("totalAmount").innerText = `Total Amount: ₹${totalAmount}`;
  document.getElementById("totalItem").innerText = `Total Items: ${totalItem}`;
}

function saveData() {
  localStorage.setItem("storeData", JSON.stringify(expenses));
}
