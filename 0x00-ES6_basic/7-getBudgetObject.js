// Using property value shorthand syntax
export default function getBudgetObject(income, gdp, capita) {
  // When variable names match object property names,
  // you can use shorthand notation
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
