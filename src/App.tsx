import React, { useState } from "react";

import ExpenseForm from "#components/ExpenseForm/ExpenseForm";
import ExpensesList from "#components/ExpensesList/ExpensesList";

import Expense from "#shared/types";

const mockData: Expense[] = [
  {
    id: 1,
    price: "990",
    description: "Athletic shoes",
    category: "clothing",
    date: "2022-07-17",
  },
];

const mockCategories: string[] = [
  "groceries",
  "clothing",
  "gas",
  "bills",
  "rent",
];

function App() {
  const [data, setData] = useState(mockData);

  const addNewExpense = (value: Expense) => {
    setData((previousValue) => {
      const newId = previousValue[0].id + 1;
      return [{ ...value, id: newId }, ...previousValue];
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold underline">Expense Tracker</h1>
      <ExpenseForm
        categories={mockCategories}
        onSubmit={(values) => {
          addNewExpense(values);
        }}
        className="my-4"
      />
      <ExpensesList data={data} />
    </div>
  );
}

export default App;
