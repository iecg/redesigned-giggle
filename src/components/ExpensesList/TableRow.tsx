import { formatDistance } from "date-fns";

import Expense from "#shared/types";

const TableRow = ({ data }: { data: Expense }) => {
  return (
    <tr>
      <td>{data.description}</td>
      <td>{data.price}</td>
      <td>
        {formatDistance(new Date(data.date), new Date(), {
          addSuffix: true,
        })}
      </td>
    </tr>
  );
};

export default TableRow;
