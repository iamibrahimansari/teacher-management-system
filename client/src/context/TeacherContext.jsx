import {createContext, useReducer} from 'react';

const TeacherContext = createContext();

const initialState = {
    formInfo: {
        name: '',
        subjects: [],
        education: '',
        cellphone: '',
        email: '',
        address: ''
    },
    classes: {
        addUserClass: '',
        displayUserClass: ''
    }
}

const teacherReducer = (state, {type, payload}) =>{
    switch(type){
        case 'SET_FORM_INPUT':
            return {
                ...state, 
                formInfo: {...state.formInfo, [payload.name]: payload.value}, 
                classes: {...state.classes}
            };

        case 'SET_CLASS':
            return {
                ...state, 
                formInfo: {...state.formInfo}, 
                classes: {...state.classes, [payload.name]: payload.value}
            };

        case 'MAKE_SUBJECT_CAPITALIZE':
            return {
                ...state, 
                formInfo: {
                    ...state.formInfo, 
                    subjects: [
                        ...state.formInfo.subjects, 
                        payload[0].toUpperCase() + payload.slice(1).toLowerCase()
                    ]
                }, 
                classes: {...state.classes}
            }
            
        default:
            return state;
    }
}

const TeacherContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(teacherReducer, initialState);
    return <TeacherContext.Provider value={{state, dispatch}}>
        {children}
    </TeacherContext.Provider>
}

export {TeacherContext, TeacherContextProvider};