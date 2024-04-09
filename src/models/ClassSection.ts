import Class from "./Class";
import Instructor from "./Instructor";

export default class ClassSection {
  id = "";

  section = "";

  crn = "";

  meetingDays = "";

  meetingTimes = "";

  finalExam = "";

  meetingLocation = "";

  courseId = "";

  class: Class | undefined = undefined;

  instructorId = "";

  instructor: Instructor | undefined = undefined;
}
