const title = document.getElementById("title");
const amount = document.getElementById("amount");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

let expenses = [];

btn.addEventListener("click", () => {
  const expenseTitle = title.value.trim();
  const expenseAmount = amount.value.trim();

  if (expenseTitle === "" || expenseAmount === "") {
    alert("Kindly fill both");
    return;
  }

  const item = document.createElement("div");
  item.classList.add("item");

  item.innerHTML = `
    <p>${expenseTitle}</p>
    <p>₹${expenseAmount}</p>
    <button class="dltBtn">Delete</button>
  `;

  // Add amount to array
  expenses.push(Number(expenseAmount));
  updateTotal();

  const dltBtn = item.querySelector('.dltBtn');

  dltBtn.addEventListener("click", () => {
    // Remove that amount from array
    expenses = expenses.filter((amt) => amt !== Number(expenseAmount));
    updateTotal();
    item.remove();
  });

  list.appendChild(item);

  title.value = "";
  amount.value = "";
});

function updateTotal() {
  const totalAmount = expenses.reduce((sum, amt) => sum + amt, 0);
  const totalItem = expenses.length
  document.getElementById("totalAmount").innerText = `Total Amount: ₹${totalAmount}`;
  document.getElementById("totalItem").innerText = `Total Items: ${totalItem}`

}


