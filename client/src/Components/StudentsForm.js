import React, { useState } from 'react';
// import uuid from 'uuid/v4';
import { useDispatch } from 'react-redux';
import { addStudentAction } from '../Redux/Store';

const StudentsForm = () => {
    
    const [student, setStudent] = useState({name: '', age: ''})
    const dispatch = useDispatch();
    const addStudent = (student) => dispatch(addStudentAction(student));

    const onChange = e => {
        setStudent({...student, [e.target.name]: e.target.value}) 
    }

    const onSubmit = e => {
        e.preventDefault();
        if(student.name.trim() === '' || student.age.trim() === '') return;
        const newStudent = {
            name: student.name.trim(),
            age: student.age.trim(),
        }

        addStudent(newStudent)
        setStudent({ name: '', age: '' });
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={student.name} onChange={onChange}
                            className="form-control" name="name" id="name" placeholder="Name..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="text" value={student.age} onChange={onChange}
                            className="form-control" name="age" id="age" placeholder="Age..."/>
                </div>
                <button type="submit" className="btn btn-primary">Add Student</button>
            </form>
        </div>
    );
}

export default StudentsForm;