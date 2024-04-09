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
    return (section === undefined) ? null : (
        <Table borderless size="sm">
            <tbody>
                <SectionHeader title="Instructor Information" label="II" />
                <InformationRow label="Course" value={`${section.class?.name} (${section.courseId}-${section.section})`} />
                <InformationRow label="Credit Hours" value={section.class?.creditHours} />
                <DescriptionRow label="Description" value={section.class?.description} />
                <ListRow label="Prerequisites" value={section.class?.prerequisites} />
                <InformationRow label="Course Meeting Times" value={section.meetingTimes} />
                <InformationRow label="Course Meeting Dates" value={section.meetingDays} />
                <InformationRow label="Course Meeting Location" value={section.meetingLocation} />
                <InformationRow label="Course Final" value={section.finalExam} />
                <ListRow label="Student Learning Outcomes" value={section.class?.learningOutcomes} />
                <ValueListRow label="Program Student Learning Outcomes" value={section.class?.programOutcomes} />
                <ValueListRow label="Baccalaureate Characteristics" value={section.class?.baccalaureateCharacteristics} />
                <ListRow label="Textbooks" value={section.class?.textbooks} />
            </tbody>
        </Table>
    )
}

export default InstructorInformation;