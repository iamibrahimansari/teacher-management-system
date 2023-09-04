import {useTeacherContext} from '../../hooks/useTeacherContext';

import './modal.css';

const Modal = () =>{
    const {state: {teachers, error, formBtnText, currTeacherId}, dispatch} = useTeacherContext();
    const handleCloseError = async (indicator = 'randomtext') =>{
        dispatch({type: 'SET_ERROR', payload: null});
        dispatch({type: 'SET_CLASS', payload: {name: 'errorClass', value: ''}});
        if(indicator === 'yes' || indicator === 'no'){
            dispatch({type: 'SET_FORM_BUTTON_TEXT', payload: ''});
        }
        if(indicator === 'yes'){
            const response = await fetch(`https://teacher-management-system.onrender.com/api/teachers/${currTeacherId}`, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'}
            })
            if(response.ok){
                dispatch({type: 'DELETE_TEACHER_RECORD', payload: {data: teachers, teacherId: currTeacherId}});
            }
        }
    }
    if(formBtnText === 'Add Teacher' || formBtnText === 'Update Teacher'){
        return <div className="modal">
            <p>{error}</p>
            <button className="close-error-modal" onClick={handleCloseError}>Close</button> :
        </div>
    }else if(formBtnText === 'Delete'){
        return <div className="modal">
            <p>Do you really want to delete this teacher record?</p>
            <div className="btns">
                <button className="close-error-modal" onClick={() => handleCloseError('yes')}>Yes</button>
                <button className="close-error-modal" onClick={() => handleCloseError('no')}>No</button>
            </div>
        </div>
    }else{
        return null;
    }
}

export default Modal;