import {useState} from 'react';

import DisplayTeachers from './components/displayTeachers/DisplayTeachers';
import AddTeacher from './components/addTeacher/AddTeacher';

const App = () =>{
  return <div className="app">
    <DisplayTeachers />
    <AddTeacher />
  </div>
}

export default App;