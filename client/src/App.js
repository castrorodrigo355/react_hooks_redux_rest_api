import React from 'react';
import StudentsForm from './Components/StudentsForm';
import StudentsList from "./Components/StudentsList";
import './App.css';

function App() {
  return (
    <div className="App">
      <hr/>
      <StudentsForm/>
      <hr/>
      <StudentsList/>
      <hr/>
    </div>
  );
}

export default App;