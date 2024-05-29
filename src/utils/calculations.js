export const calculateInterestRate = (initialValue, days, interestRate) => {
  const decimalInterestRate = Number(interestRate) / 100; // 4% / 12 months = 0,3333%
  let total = Number(initialValue) * (1 + decimalInterestRate / 12);

  return total.toFixed(2);
};
