function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  
  "use strict";

  const discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    arr = [-b / (2 * a)];
  } else if (discriminant > 0) {
    arr = [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
  }
    return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  // код для задачи №2 писать здесь
  "use strict";

  const loanBody = amount - contribution;

  let now = new Date();
  let nowDate = Date.parse(now);

  let afterDate = Date.parse(date);
    
  let month = Math.round((afterDate - nowDate) / (1000 * 60 * 60 * 24 * 30));
  console.log(month);

  let P = percent / 12 / 100;
  let monthPay = loanBody * (P + (P / (((1 + P) ** month) - 1)));
  
  totalAmount = monthPay * month;
 
  return totalAmount.toFixed(2);
}
