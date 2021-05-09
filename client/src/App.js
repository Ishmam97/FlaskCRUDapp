import './App.css';
import UserForm from './components/UserForm'
import UserTable from './components/UserTable'
function App() {
  return (
    <div className="App">
        <h1>Flask CRUD APP</h1>
        <br/>
        <div className="tables mt-5">
            <h3 className="mb-5">Students</h3>
            <UserTable/>
            <br/>
        </div>
        <div className="w-100 d-flex flex-wrap justify-content-around align-items-start">
            <UserForm/>            
        </div>
    </div>
  );
}

export default App;
