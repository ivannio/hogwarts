import utilities from '../../helpers/utilities';

import './studentList.scss';
import studentData from '../../helpers/data/studentData';
import studentCard from '../studentCard/studentCard';

const createStudentList = () => {
  const students = studentData.getStudents();
  let stringToPrint = '<ul class="student-list">';
  for (let i = 0; i < students.length; i += 1) {
    stringToPrint += studentCard.createStudentCard(students[i]);
  }
  stringToPrint += '</ul>';

  utilities.printToDom(stringToPrint, 'student-container');
};

export default { createStudentList };
