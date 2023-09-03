import {useState, useEffect} from 'react';

import TeacherDetail from '../teacherDetail/TeacherDetail';
import Loader from '../loader/Loader';
import Modal from '../modal/Modal';

import {useTeacherContext} from '../../hooks/useTeacherContext';
import header from '../../data/header';

import './displayTeachers.css';

const DisplayTeachers = () =>{
    const {state, dispatch} = useTeacherContext();
    const {teachers, isLoading, isDelete, classes: {displayTeacherClass, errorClass}} = state;
    useEffect(() =>{
        const getTeachers = async () =>{
            const response = await fetch('http://localhost:8080/api/teachers', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            });
            const json = await response.json();
            dispatch({type: 'SET_ALL_TEACHER', payload: json});
            dispatch({type: 'IS_LOADING', payload: null});
        }
        getTeachers();
    }, []);
    const handleClass = () =>{
        dispatch({type: 'SET_CLASS', payload: {name: 'addTeacherClass', value: 'add-teacher-form-open'}});
        dispatch({type: 'SET_CLASS', payload: {name: 'displayTeacherClass', value: 'hide-display-teacher'}});
        dispatch({type: 'SET_FORMINFO_VALUES', payload: {name: '', subjects: [], education: '', cellphone: '', email: '', address: ''}});
        dispatch({type: 'SET_FORM_BUTTON_TEXT', payload: 'Add Teacher'});
    }
    return <div className={`display-teachers ${displayTeacherClass}`}>
        <h1 className={errorClass}>Teacher Management System</h1>
        {
            isLoading ?
            <Loader /> :
            teachers.length ?
            <table className={errorClass}>
                <caption>Teachers Details</caption>
                <thead>
                    <tr>
                        {
                            header.map((element, index) => <th key={index}>{element}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                {
                    teachers.map((teacher, index) => {
                        const newTeacher = {
                            id: index + 1,
                            ...teacher
                        }
                        return <TeacherDetail key={teacher._id} {...newTeacher} />
                    })
                }
                </tbody>
                <tfoot>
                    <tr>
                        {
                            header.map((element, index) => <th key={index}>{element}</th>)
                        }
                    </tr>
                </tfoot>
            </table> :
            <h3>There is no teacher avilable in database. Create first one</h3>
        }
        <button type='button' onClick={handleClass}>Add New Teacher</button>
        {
            errorClass &&
            <Modal />
        }
    </div>
}

export default DisplayTeachers;