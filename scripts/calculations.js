// Presupuesto
let budgetValue = 0;
// Gastos totales
let totalExpensesValue = 0;
// Lista de gastos
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];
// Ciclo para actualizar "Gastos totales"
for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
}
// Gasto promedio
function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  } else {
    return totalExpensesValue / expenseEntries.length;
  }
}
// Saldo restante
function calculateBalance() {
  return budgetValue - totalExpensesValue;
}
// Color predeterminado del saldo y presupuesto
let balanceColor = "green";
// Funcion que cambia el color dependiendo del saldo restante
function updateBalanceColor() {
  const balance = calculateBalance();
  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}
// Estadistica por categoria
function calculateCategoryExpenses(category) {
  // Declaramos el total, para retornarlo al final
  let total = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    // Declaramos la categoria actual y la cantidad
    let currentCategory = expenseEntries[i][0];
    let amount = expenseEntries[i][1];
    if (currentCategory === category) {
      total += amount;
    }
  }
  return total;
}
// Calcular la categoria con el gasto mas alto
function calculateLargestCategory() {
  let largestCategory = "";
  let largestAmount = 0;
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  let categoriesData = [];

  for (let i = 0; i < categories.length; i++) {
    categoriesData.push([
      categories[i],
      calculateCategoryExpenses(categories[i]),
    ]);
    if (categoriesData[i][1] > largestAmount) {
      largestCategory = categoriesData[i][0];
      largestAmount = categoriesData[i][1];
    }
  }
  return largestCategory;
}
// Añadir nuevos gastos
function addExpenseEntry([newCategory, newAmount]) {
  expenseEntries.push([newCategory, newAmount]);
  totalExpensesValue += newAmount;
}
