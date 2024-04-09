/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";

interface ValueListRowProps {
  label: string | undefined;
  value: string[][] | undefined;
}

function ValueListRow({ label, value }: Readonly<ValueListRowProps>) {
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
          {value === undefined || value.length === 0 ? (
            <i>None</i>
          ) : (
            <ol>
              {value?.map((v) => (
                <li value={v[0]} key={v[0]}>
                  {v[1]}
                </li>
              ))}
            </ol>
          )}
        </td>
      </tr>
    </>
  );
}

export default ValueListRow;
