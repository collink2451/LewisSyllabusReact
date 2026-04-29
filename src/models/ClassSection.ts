import Class from "./Class";
import Instructor from "./Instructor";

export default class ClassSection {
  id = 0;

  section_code = "";

  section = "";

  crn = "";

  meeting_days = "";

  meeting_times = "";

  final_exam = "";

  meeting_location = "";

  course_id = 0;

  instructor_id = 0;

  class: Class | undefined = undefined;

  instructor: Instructor | undefined = undefined;
}
