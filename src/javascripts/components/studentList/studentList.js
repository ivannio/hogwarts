import utilities from '../../helpers/utilities';

import './studentList.scss';
import studentData from '../../helpers/data/studentData';
import houseData from '../../helpers/data/houseData';
import studentCard from '../studentCard/studentCard';

const createStudentList = () => {
  const students = studentData.getStudents();
  const houses = houseData.getHouses();
  let stringToPrint = '<ul class="student-list">';
  for (let i = 0; i < students.length; i += 1) {
    for (let j = 0; j < houses.length; j += 1) {
      if (students[i].houseId === houses[j].id) {
        stringToPrint += studentCard.createStudentCard(students[i], houses[j]);
      }
    }
  }
  stringToPrint += '</ul>';
  utilities.printToDom(stringToPrint, 'student-container');
};

export default { createStudentList };
