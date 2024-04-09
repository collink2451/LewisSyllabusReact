import React from "react";

interface InformationRowProps {
    label: string | undefined;
    value: string | number | undefined;
}

function InformationRow({ label, value }: Readonly<InformationRowProps>) {
    return (
        <tr>
            <td></td>
            <th className="w-20">{label}:</th>
            <td className="justify-content-left">{value}</td>
        </tr>
    );
}

export default InformationRow;