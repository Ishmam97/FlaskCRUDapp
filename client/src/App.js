import './App.css';
import StudentForm from './components/StudentForm'
import SubjectForm from './components/SubjectForm'
import StudentSubjectForm from './components/StudentSubjectForm'
import StudentTable from './components/StudentTable'
import SubjectTable from './components/SubjectTable'
function App() {
  return (
    <div className="App">
        <h1>Flask CRUD APP</h1>
        <br/>
        <div className="w-100 d-flex flex-wrap justify-content-around align-items-start">
          
            <StudentForm/>
            <div>
            <SubjectForm/>
            <StudentSubjectForm/>
            </div>

            
        </div>
        <div className="tables mt-5">
            <h3 className="mb-5">Students</h3>
            <StudentTable/>
            <br/>
            <SubjectTable/>
        </div>
        
    </div>
  );
}

export default App;
