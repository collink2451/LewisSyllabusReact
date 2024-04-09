import React from "react";

interface ListRowProps {
    label: string | undefined;
    value: string[] | undefined;
}

function ListRow({ label, value }: Readonly<ListRowProps>) {
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
                        {value?.map((v, index) => <li key={index}>{v}</li>)}
                    </ol>
                </td>
            </tr>
        </>
    );
}

export default ListRow;