/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";

interface ListRowProps {
  label: string | undefined;
  value: string[] | undefined;
}

function ListRow({ label, value }: Readonly<ListRowProps>) {
  return (
    <>
      <tr>
        <td />
        <th colSpan={2} className="w-20">
          {label}:
        </th>
      </tr>
      <tr>
        <td />
        <td colSpan={2} className="justify-content-left">
          {value === undefined || value.length === 0 ? <i>None</i> : <ol>{value?.map((v) => <li key={v}>{v}</li>)}</ol>}
        </td>
      </tr>
    </>
  );
}

export default ListRow;
