import React, { useContext } from 'react';
import Student from './Student';
import { StudentContext } from './StudentContext';

const StudentList = () => {
  const [students, setStudents] = useContext(StudentContext);
  return (
    <div>
      {students.map((student) => (
        <Student
          key={student.id}
          firstName={student.firstName}
          lastName={student.lastName}
          email={student.email}
          birthDate={student.birthDate}
          faculty={student.faculty}
          department={student.department}
        />
      ))}
    </div>
  );
};

export default StudentList;
