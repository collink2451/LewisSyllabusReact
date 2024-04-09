import React from "react";

interface SectionHeaderProps {
    title: string;
    label: string;
}

function SectionHeader({ title, label } : Readonly<SectionHeaderProps>) {
    return (
        <tr>
            <td style={{width: '30px'}}>
                <b>{label}.</b>
            </td>
            <th colSpan={2}>
                <h5>{title}</h5>
            </th>
        </tr>
    );
}

export default SectionHeader;