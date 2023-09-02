import {useState} from 'react';

import DisplayUsers from './components/displayUsers/DisplayUsers';
import AddUser from './components/addUser/AddUser';

const App = () =>{
  return <div className="app">
    <DisplayUsers />
    <AddUser />
  </div>
}

export default App;