/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import { Table } from "react-bootstrap";
import { ClassSection } from "src/models";

interface SyllabusHeaderProps {
  section: ClassSection | undefined;
}

function SyllabusHeader({ section }: Readonly<SyllabusHeaderProps>) {
  return (
    <Table borderless size="sm">
      <tbody>
        <td style={{ width: "20px" }} />
        <td style={{ width: "30%" }}>
          <img style={{ width: "100%" }} src="/img/LewisUniversityLogo.png" alt="Lewis University Logo" />
        </td>
        <td style={{ textAlign: "center" }}>
          <h5>
            <br />
            <br />
            <br />
            <b>{section?.class?.name}</b>
            <br />
            <b>{section?.id}</b>
            <br />
            <b>Syllabus</b>
          </h5>
        </td>
      </tbody>
    </Table>
  );
}

export default SyllabusHeader;
