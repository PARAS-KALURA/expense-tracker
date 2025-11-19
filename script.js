const title = document.getElementById("title");
const amount = document.getElementById("amount");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
const expenseTitle = title.value.trim();
const expenseAmount = amount.value.trim();

if(expenseTitle === "" || expenseAmount === "" ) {
   alert("Kindly fill both");
   return;
}


});

