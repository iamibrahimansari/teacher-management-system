import {useContext} from 'react';

import {TeacherContext} from '../context/TeacherContext';

export const useTeacherContext = () =>{
    const context = useContext(TeacherContext);
    if(!context){
        throw Error('TeacherContext must be used in TeacherContextProvider');
    }
    return context;
}