import React, { useEffect } from 'react';
// import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { getStudentsAction, deleteStudentAction, updateStudentAction } from '../Redux/Store';

// const initialState = {loading:true, error:"", students:[]}

// const reducer = (state, action) => {
//     switch(action.type){
//         case "FETCH_SUCCESS": return { loading: false, students: action.payload, error: "" };
//         case "FETCH_ERROR": return { loading: false, students: [], error: "Something went wrong" };
//         default: return state;
//     }
// }

const StudentsList = () => {

    var students = useSelector(state => state.students);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getStudentsAction())
    }, []);

    const deleteStudent = (id) => dispatch(deleteStudentAction(id));
    const updateStudent = (id) => dispatch(updateStudentAction(id));

    return ( 
        <div>
            {
                students.map((student, i) => {
                    return(
                        <div key={i}>
                            {student._id} - 
                            {student.name} - 
                            {student.age} - 
                            <button onClick={deleteStudent.bind(null, student._id)}>Delete</button> -
                            <button onClick={updateStudent.bind(null, student._id)}>Edit</button>
                        </div>
                    )
                })
                // loading ? "Loadging" 
                //     : 
                //     students.map((student, i) => {
                //         return(
                //             <div key={i}>
                //                 {student._id} - 
                //                 {student.name} - 
                //                 {student.age} - 
                //                 {/* <button onClick={deleteStudent.bind(null, student.id)}>Delete</button> -
                //                 <button onClick={updateStudent.bind(null, student.id)}>Edit</button> */}
                //             </div>
                //         )
                //     })
            }
            {/* {error ? "Error" : null} */}
            
        </div>
    );
}

export default StudentsList;