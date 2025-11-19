const title = document.getElementById("title");
const amount = document.getElementById("amount");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.addEventListener("click", () => {
  const expenseTitle = title.value.trim();
  const expenseAmount = amount.value.trim();

  if (expenseTitle === "" || expenseAmount === "") {
    alert("Kindly fill both");
    return;
  }

  const item = document.createElement("div"); //<div></div>
  item.classList.add("item"); // <div class="item"></div>


  item.innerHTML = `<p>${expenseTitle}</p>  <p>Rs.${expenseAmount}</p>
  <button class="dltBtn">Delete</button>
`;




 const dltBtn = item.querySelector('.dltBtn');

  dltBtn.addEventListener("click", () => {
   item.remove();
  })

   list.appendChild(item);

  title.value = "";
  amount.value = "";

});
