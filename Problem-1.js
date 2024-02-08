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
  for (i = 0; i < array.length; i++) {
    const element = array[i];
    if (typeof element === "number" && !isNaN(element)) {
      virusDelete.push(element);
    }
  }
  return virusDelete;
}
