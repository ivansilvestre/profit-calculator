export const calculateInterestRate = (initialValue, months, interestRate) => {
  const anualInterestRate = Number(interestRate) / 100;
  const mensalInterestRate = anualInterestRate / 12;

  return (
    Number(initialValue) * Math.pow(1 + mensalInterestRate, Number(months))
  );
};
