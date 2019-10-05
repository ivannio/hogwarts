import '../styles/main.scss';
import navbar from './components/navbar/navbar';
import studentList from './components/studentList/studentList';


const init = () => {
  navbar.loadNavBar();
  studentList.createStudentList();
};

init();
