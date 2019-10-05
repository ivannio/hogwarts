import './studentCard.scss';

const createStudentCard = (student) => {
  const stringToPrint = `
  <li class="student-card">
    <div class="img-holder">
      <img src="${student.picture}">
    </div>
    <h2>${student.name}</h2>
  </li>
  `;
  return stringToPrint;
};

export default { createStudentCard };
