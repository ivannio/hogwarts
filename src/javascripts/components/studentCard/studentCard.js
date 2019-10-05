import './studentCard.scss';

const createStudentCard = (student, house) => {
  const stringToPrint = `
  <li class="student-${house.name.toLowerCase()}">
    <div class="img-holder">
      <img src="${student.picture}">
    </div>
    <h2>${student.name}</h2>
  </li>
  `;
  return stringToPrint;
};

export default { createStudentCard };
