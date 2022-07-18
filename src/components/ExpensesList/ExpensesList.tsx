import classNames from "classnames";

import Expense from "#shared/types";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const ExpensesList = ({
  data,
  className,
}: {
  data: Expense[];
  className?: string;
}) => {
  return (
    <table className={classNames(className)}>
      <TableHeader />
      <tbody>
        {data &&
          data.length > 0 &&
          data.map((expense) => (
            <TableRow key={`expense_${expense.id}`} data={expense} />
          ))}
      </tbody>
    </table>
  );
};

export default ExpensesList;
