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
    teachers: [],
    classes: {
        addUserClass: '',
        displayUserClass: '',
        errorClass: ''
    },
    error: null,
    formBtnText: '',
    currTeacherId: '',
    isLoading: true,
}

const teacherReducer = (state, {type, payload}) =>{
    switch(type){
        case 'IS_LOADING':
            return {
                ...state,
                formInfo: {...state.formInfo},
                classes: {...state.classes},
                isLoading: payload
            }
        case 'SET_CURR_TEACHER_ID':
            return {
                ...state,
                formInfo: {...state.formInfo},
                classes: {...state.classes},
                currTeacherId: payload
            }
        case 'SET_FORM_BUTTON_TEXT':
            return {
                ...state,
                formInfo: {...state.formInfo},
                classes: {...state.classes},
                formBtnText: payload
            }
        case 'DELETE_TEACHER_RECORD':
            return {
                ...state,
                formInfo: {...state.formInfo},
                classes: {...state.classes},
                teachers: payload.data.filter(teacher => teacher._id !== payload.teacherId)
            }
        case 'SET_FORMINFO_VALUES':
            return {
                ...state,
                formInfo: payload,
                classes: {...state.classes}
            }
        case 'SET_ALL_TEACHER':
            return {
                ...state,
                formInfo: {...state.formInfo},
                classes: {...state.classes},
                teachers: payload
            }
        case 'ADD_NEW_TEACHER':
            return {
                ...state,
                formInfo: {...state.formInfo},
                classes: {...state.classes},
                teachers: [...state.teachers, payload]
            }
        case 'UPDATE_TEACHER':
            const temp = state.teachers;
            const index = temp.findIndex(teacher => teacher._id === payload._id);
            temp.splice(index, 1, payload);
            return {
                ...state,
                formInfo: {...state.formInfo},
                classes: {...state.classes},
                teachers: temp
            }
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
        case 'SET_ERROR':
            return {
                ...state,
                formInfo: {...state.formInfo},
                classes: {...state.classes},
                error: payload
            }
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