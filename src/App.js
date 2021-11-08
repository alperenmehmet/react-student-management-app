import AddStudent from './components/AddStudent';
import Student from './components/Student';
import { StudentContext, StudentProvider } from './components/StudentContext';
import StudentList from './components/StudentList';
import StudentTable from './components/StudentTable';

function App() {
  return (
    <StudentProvider>
      <div>
        <AddStudent />
        <StudentTable />
        <Student />
        <StudentList />
      </div>
    </StudentProvider>
  );
}

export default App;
