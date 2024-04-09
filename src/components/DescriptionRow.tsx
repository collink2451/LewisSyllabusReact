import React from "react";

interface DescriptionRowProps {
    label: string | undefined;
    value: string | number | undefined;
}

function DescriptionRow({ label, value }: Readonly<DescriptionRowProps>) {
    return (
        <>
            <tr>
                <td></td>
                <th className="w-20">{label}:</th>
            </tr>
            <tr>
                <td></td>
                <td colSpan={2} className="justify-content-left">{value}</td>
            </tr>
        </>
    );
}

export default DescriptionRow;