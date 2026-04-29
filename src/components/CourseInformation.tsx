import React from "react";
import { Table } from "react-bootstrap";
import { ClassSection } from "src/models";
import DescriptionRow from "./DescriptionRow";
import InformationRow from "./InformationRow";
import ListRow from "./ListRow";
import SectionHeader from "./SectionHeader";
import ValueListRow from "./ValueListRow";

interface InstructorInformationProps {
  section: ClassSection | undefined;
}

function InstructorInformation({ section }: Readonly<InstructorInformationProps>) {
  return section === undefined ? null : (
    <Table borderless size="sm">
      <tbody>
        <SectionHeader title="Instructor Information" label="II" />
        <InformationRow label="Course" value={`${section.class?.name} (${section.section_code})`} />
        <InformationRow label="Credit Hours" value={section.class?.credit_hours} />
        <DescriptionRow label="Description" value={section.class?.description} />
        <ListRow label="Prerequisites" value={section.class?.prerequisites} />
        <InformationRow label="Course Meeting Times" value={section.meeting_times} />
        <InformationRow label="Course Meeting Dates" value={section.meeting_days} />
        <InformationRow label="Course Meeting Location" value={section.meeting_location} />
        <InformationRow label="Course Final" value={section.final_exam} />
        <ListRow label="Student Learning Outcomes" value={section.class?.learning_outcomes} />
        <ValueListRow label="Program Student Learning Outcomes" value={section.class?.program_outcomes} />
        <ValueListRow label="Baccalaureate Characteristics" value={section.class?.baccalaureate_characteristics} />
        <ListRow label="Textbooks" value={section.class?.textbooks} />
      </tbody>
    </Table>
  );
}

export default InstructorInformation;
