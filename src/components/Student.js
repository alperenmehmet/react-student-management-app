import React, { useContext } from 'react';
import { StudentContext } from './StudentContext';

const Student = ({
  firstName,
  lastName,
  email,
  birthDate,
  faculty,
  department,
}) => {
  const [students, setStudents] = useContext(StudentContext);
  return (
    <div>
      <table>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{birthDate}</td>
        <td>{faculty}</td>
        <td>{department}</td>
      </table>
    </div>
  );
};

export default Student;
