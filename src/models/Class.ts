export default class Class {
  id = 0;

  course_code = "";

  name = "";

  credit_hours = 0;

  description = "";

  prerequisites: string[] = [];

  learning_outcomes: string[] = [];

  program_outcomes: (string | number)[][] = [];

  baccalaureate_characteristics: (string | number)[][] = [];

  textbooks: string[] = [];

  modules: string[] = [];
}
