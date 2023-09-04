import {useState} from 'react';

import {useTeacherContext} from '../../hooks/useTeacherContext';
import Modal from '../modal/Modal';

import './addTeacher.css';

const AddTeacher = () =>{
    const {state, dispatch} = useTeacherContext();
    const {
        formInfo: {
            name, subjects, education, cellphone, email, address
        }, 
        teachers, 
        classes: {
            addTeacherClass,
            errorClass
        },
        formBtnText,
        currTeacherId,
    } = state;
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
        if(subject){
            dispatch({type: 'MAKE_SUBJECT_CAPITALIZE', payload: subject});
            setSubject('');
        }
    }

    const handleOnSubmit = async event =>{
        event.preventDefault();
        let response = null;
        if(formBtnText === 'Add Teacher'){
            response = await fetch('https://teacher-management-system.onrender.com/api/teachers', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name, subjects, education, cellphone, email, address})
            });
        }else if(formBtnText === 'Update Teacher'){
            response = await fetch(`https://teacher-management-system.onrender.com/api/teachers/${currTeacherId}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name, subjects, education, cellphone, email, address})
            })
        }
        console.log(response);
        const json = await response.json();
        console.log(json);
        if(!response.ok){
            dispatch({type: 'SET_ERROR', payload: json.error});
            dispatch({type: 'SET_CLASS', payload: {name: 'errorClass', value: 'error-class'}});
        }

        if(response.ok){
            dispatch({type: formBtnText === 'Add Teacher' ? 'ADD_NEW_TEACHER' : 'UPDATE_TEACHER', payload: json});
            dispatch({type: 'SET_ERROR', payload: null});
            dispatch({type: 'SET_CLASS', payload: {name: 'errorClass', value: ''}});
            dispatch({type: 'SET_CLASS', payload: {name: 'addTeacherClass', value: ''}});
            dispatch({type: 'SET_CLASS', payload: {name: 'displayTeacherClass', value: ''}});
        }
    }

    const closeForm = () =>{
        dispatch({type: 'SET_CLASS', payload: {name: 'errorClass', value: ''}});
        dispatch({type: 'SET_CLASS', payload: {name: 'addTeacherClass', value: ''}});
        dispatch({type: 'SET_CLASS', payload: {name: 'displayTeacherClass', value: ''}});
    }

    return <div className={`add-teacher ${addTeacherClass}`}>
        <h2 className={errorClass}>Add New Teacher</h2>
        <form method="POST" onSubmit={handleOnSubmit} className={errorClass}>
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
                <span>Address</span>
                <textarea onChange={handleOnChange} name="address" value={address} cols="30" rows="5"></textarea>
            </label>
            <div className="btns">
                <button type="button" onClick={closeForm}>Close</button>
                <button type="submit">{formBtnText}</button>
            </div>
        </form>
        {
            errorClass &&
            <Modal />
        }
    </div>
}

export default AddTeacher;



