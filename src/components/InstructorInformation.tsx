import React from "react";
import { Table } from "react-bootstrap";
import { Instructor } from "src/models";
import InformationRow from "./InformationRow";
import SectionHeader from "./SectionHeader";

interface InstructorInformationProps {
  instructor: Instructor | undefined;
}

function InstructorInformation({ instructor }: Readonly<InstructorInformationProps>) {
  return instructor === undefined ? null : (
    <Table borderless size="sm">
      <tbody>
        <SectionHeader title="Instructor Information" label="I" />

        <InformationRow label="Instructor’s Name" value={instructor.name} />
        <InformationRow label="Office Hours" value={instructor.office_hours} />
        <InformationRow label="Lewis Office Location" value={instructor.office} />
        <InformationRow label="Appointments" value={instructor.appointment_info} />
        <InformationRow label="Lewis Email" value={instructor.email} />
        <InformationRow label="Lewis Phone Number" value={instructor.phone} />
      </tbody>
    </Table>
  );
}

export default InstructorInformation;
