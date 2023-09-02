import {useState} from 'react';

import DisplayUsers from './components/displayUsers/DisplayUsers';
import AddUser from './components/addUser/AddUser';

const initialState = {
  name: '',
  subjects: [],
  education: '',
  cellphone: '',
  email: '',
  address: ''
}

const App = () =>{
  const [formInfo, setFormInfo] = useState(initialState);
  const [addUserClass, setAddUserClass] = useState('');
  const [displayUserClass, setDisplayUserClass] = useState('');
  return <div className="app">
    <DisplayUsers setAddUserClass={setAddUserClass} displayUserClass={displayUserClass} setDisplayUserClass={setDisplayUserClass} />
    <AddUser formInfo={formInfo} setFormInfo={setFormInfo} addUserClass={addUserClass} />
  </div>
}

export default App;