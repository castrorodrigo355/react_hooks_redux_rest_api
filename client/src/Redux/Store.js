import { createStore, applyMiddleware } from "redux";
import axios from "axios";
// import uuid from 'uuid/v4';
import thunk from "redux-thunk"

// *********************************************************************************************************
const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

// *********************************************************************************************************
// Store
export const store = createStore(
  reducer, { 
              students: []
            },
            applyMiddleware(logger, thunk),
            // window.devToolsExtension && window.devToolsExtension()
);
// Reducer
export default function reducer(state, action) {
  switch (action.type) {
    case 'GET_STUDENTS':
    return {
        ...state,
        students: action.payload
    };
    case 'DELETE_STUDENT':
      return {
        ...state,
        students: action.payload
    };
    case 'ADD_STUDENT':
    return {
        ...state,
        students: [...state.students, action.payload]
    };
    case 'UPDATE_STUDENT':
      return {
        ...state,
        students: state.students.map((st) => st.id === action.payload ? { ...st, age: 50 }: st)
      };
    default:
      return state;
  }
}

// *********************************************************************************************************
// Actions
export const getStudentsAction= () => {
  return dispatch => {
    axios.get(`http://localhost:3000/api/students`)
    .then(res =>
          dispatch({
            type: "GET_STUDENTS",
            payload: res.data
          })
    );
  };
}

export const deleteStudentAction = (id) => {
  return dispatch => {
    axios.delete(`http://localhost:3000/api/students/${id}`)
    .then(res =>
          dispatch({
            type: "DELETE_STUDENT",
            payload: res.data
          })
    );
  };
};

export const addStudentAction = (student) => {
  return dispatch => {
    axios.post(`http://localhost:3000/api/students/`, student)
    .then(res =>
          dispatch({
            type: "ADD_STUDENT",
            payload: res.data
          })
    );
  };
};

export const updateStudentAction = (id) => ({
  type: 'UPDATE_STUDENT',
  payload: id
});