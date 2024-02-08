function calculateMoney(ticketSale) {
  if (typeof ticketSale !== "number" || ticketSale <= 0) {
    return "Please enter a number";
  }
  const perTicketPrice = 120;
  const totalStaff = 8;
  const lunchCostPerStaff = 50;
  const gateManCostPerDay = 500;
  const totalLunchCost = totalStaff * lunchCostPerStaff;
  const totalExpenses = totalLunchCost + gateManCostPerDay;
  const totalIncome = ticketSale * perTicketPrice;
  const totalProfit = totalIncome - totalExpenses;
  return totalProfit;
}

function checkName(name) {
  if (typeof name !== "string") {
    return "Please enter a valid name";
  }
  const forUpperName = name.toUpperCase();
  const forLowerName = name.toLowerCase();
  if (
    forLowerName.endsWith("a") ||
    forLowerName.endsWith("e") ||
    forLowerName.endsWith("i") ||
    forLowerName.endsWith("o") ||
    forLowerName.endsWith("u") ||
    forLowerName.endsWith("w") ||
    forUpperName.endsWith("A") ||
    forUpperName.endsWith("E") ||
    forUpperName.endsWith("I") ||
    forUpperName.endsWith("O") ||
    forUpperName.endsWith("U") ||
    forUpperName.endsWith("W")
  ) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Please Input An Array";
  }
  const virusDelete = [];
  let i = 0;
  for (i = 0; i < array.length; i++) {
    const element = array[i];
    if (typeof element === "number" && !isNaN(element)) {
      virusDelete.push(element);
    }
  }
  return virusDelete;
}
console.log(deleteInvalids({ num: [1, 2, 3] }));
console.log(deleteInvalids(["1", { num: 2 }, NaN]));
console.log(deleteInvalids([1, 2, -3]));
console.log(
  deleteInvalids([
    1,
    null,
    undefined,
    18,
    -19,
    NaN,
    "12",
    [1, 2],
    { ob: "lala" },
  ])
);

function password(obj) {
  if (!obj.name || !obj.birthYear || !obj.siteName) {
    return "invalid";
  }
  if (isNaN(obj.birthYear)) {
    return "invalid";
  } else {
    if (obj.birthYear.toString().length !== 4) {
      return "invalid";
    }
  }
  const websiteName =
    obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
  const createPassword = websiteName + "#" + obj.name + "@" + obj.birthYear;
  return createPassword;
}

function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }

  // Calculation of total income
  let sum = 0;
  let totalTax = 0;
  for (let element of arr) {
    sum += element;
    if (element >= 3000) {
      const tax = 0.2;
      const taxAmount = element * tax;
      totalTax += taxAmount;
    }
  }

  const netIncomeAfterTax = sum - totalTax;
  const totalSavings = netIncomeAfterTax - livingCost;
  if (totalSavings >= 0) {
    return totalSavings;
  } else {
    return "earn more";
  }
}
