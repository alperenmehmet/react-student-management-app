import React, { useContext, useState } from 'react';
import { StudentContext } from './StudentContext';

const AddStudent = () => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    faculty: '',
    department: '',
  });

  const [students, setStudents] = useContext(StudentContext);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStudent({ ...student, [name]: value });
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (
      student.firstName &&
      student.lastName &&
      student.email &&
      student.birthDate &&
      student.faculty &&
      student.department
    ) {
      const newStudent = { ...student, id: new Date().getTime().toString() };
      setStudents([...students, newStudent]);
      setStudent({
        firstName: '',
        lastName: '',
        email: '',
        birthDate: '',
        faculty: '',
        department: '',
      });
    }
  };

  console.log(student);
  return (
    <div>
      <form className='container'>
        <div className='row'>
          <label className='col-25' htmlFor='firstname'>
            First Name
          </label>
          <input
            className='col-75'
            id='firstname'
            type='text'
            name='firstName'
            value={student.firstName}
            onChange={handleChange}
          />
        </div>
        <div className='row'>
          <label className='col-25' htmlFor='lastname'>
            Last Name
          </label>
          <input
            name='lastName'
            className='col-75'
            id='lastname'
            type='text'
            value={student.lastName}
            onChange={handleChange}
          />
        </div>
        <div className='row'>
          <label className='col-25' htmlFor='email'>
            Email
          </label>
          <input
            className='col-75'
            id='email'
            type='text'
            name='email'
            value={student.email}
            onChange={handleChange}
          />
        </div>
        <div className='row'>
          <label className='col-25' htmlFor='birthdate'>
            Birth Date
          </label>
          <input
            className='col-75'
            id='birthdate'
            type='date'
            name='birthDate'
            value={student.birthDate}
            onChange={handleChange}
          />
        </div>
        <div className='row'>
          <label className='col-25' htmlFor='faculties'>
            Faculty
          </label>
          <input
            className='col-75'
            id='faculty'
            type='text'
            name='faculty'
            value={student.faculty}
            onChange={handleChange}
          />
        </div>
        <div className='row'>
          <label className='col-25' htmlFor='departments'>
            Department
          </label>
          <input
            className='col-75'
            id='department'
            type='text'
            name='department'
            value={student.department}
            onChange={handleChange}
          />
        </div>
        <div className='row'>
          <button onClick={handleAddStudent} type='submit'>
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
