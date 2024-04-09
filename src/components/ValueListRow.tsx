import React from "react";

interface ValueListRowProps {
    label: string | undefined;
    value: string[][] | undefined;
}

function ValueListRow({ label, value }: Readonly<ValueListRowProps>) {
    return (
        <>
            <tr>
                <td></td>
                <th colSpan={2} className="w-20">{label}:</th>
            </tr>
            <tr>
                <td></td>
                <td colSpan={2} className="justify-content-left">
                    <ol>
                        {value?.map((v, index) => <li value={v[0]} key={index}>{v[1]}</li>)}
                    </ol>
                </td>
            </tr>
        </>
    );
}

export default ValueListRow;