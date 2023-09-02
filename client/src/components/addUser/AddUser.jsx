import {useState} from 'react';

import {useTeacherContext} from '../../hooks/useTeacherContext';

import './addUser.css';

const AddUser = () =>{
    const {state, dispatch} = useTeacherContext();
    const {formInfo: {name, subjects, education, cellphone, email, address}, classes: {addUserClass}} = state;
    const [subject, setSubject] = useState('');
    const handleOnChange = event =>{
        const {name, value} = event.target;
        if(name === 'subject'){
            setSubject(value);
        }else{
            dispatch({type: 'SET_FORM_INPUT', payload: {name, value}})
        }
    }

    const handleOnClick = event =>{
        dispatch({type: 'MAKE_SUBJECT_CAPITALIZE', payload: subject});
        setSubject('');
    }

    const handleOnSubmit = event =>{
        event.preventDefault();
        dispatch({type: 'SET_CLASS', payload: {name: 'addUserClass', value: ''}});
        dispatch({type: 'SET_CLASS', payload: {name: 'displayUserClass', value: ''}});
    }
    return <div className={`add-user ${addUserClass}`}>
        <h2>Add New Teacher</h2>
        <form method="POST" onSubmit={handleOnSubmit}>
            <label>
                <span>Name</span>
                <input onChange={handleOnChange} type="text" name="name" value={name} />
            </label>
            <label>
                <span>Subjects</span>
                <div className="container">
                    <input onChange={handleOnChange} type="text" name="subject" value={subject} />
                    <button onClick={handleOnClick} type="button">Add</button>
                </div>
                <p>{subjects.join(', ')}</p>
            </label>
            <label>
                <span>Highest Qualification</span>
                <input onChange={handleOnChange} type="text" name="education" value={education} />
            </label>
            <label>
                <span>Cellphone</span>
                <input onChange={handleOnChange} type="number" name="cellphone" value={cellphone} />
            </label>
            <label>
                <span>Email</span>
                <input onChange={handleOnChange} type="email" name="email" value={email} />
            </label>
            <label>
                <span>Name</span>
                <textarea onChange={handleOnChange} name="address" value={address} cols="30" rows="5"></textarea>
            </label>
            <div className="btn">
                <button type="submit">Add Teacher</button>
            </div>
        </form>
    </div>
}

export default AddUser;



