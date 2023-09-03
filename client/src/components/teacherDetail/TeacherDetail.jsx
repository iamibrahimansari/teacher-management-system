import {BiEdit} from 'react-icons/bi';
import {MdDelete} from 'react-icons/md';

import {useTeacherContext} from '../../hooks/useTeacherContext';

import './teacherDetail.css';

const TeacherDetail = ({id, _id, name, subjects, education, cellphone, email, address}) =>{
    const {state: {formInfo, teachers}, dispatch} = useTeacherContext();
    const teacher = [id, name, subjects, education, cellphone, email, address];
    const deleteTeacherRecord = async () =>{
        dispatch({type: 'SET_CLASS', payload: {name: 'errorClass', value: 'error-class'}});
        dispatch({type: 'SET_CURR_TEACHER_ID', payload: _id});
        dispatch({type: 'SET_FORM_BUTTON_TEXT', payload: 'Delete'});
    }

    const editTeacherRecord = () =>{
        const currentTeacher = teachers.find(currTeacher => currTeacher._id === _id);
        const {_id: currId, ...teacher} = currentTeacher;
        dispatch({type: 'SET_CURR_TEACHER_ID', payload: _id});
        dispatch({type: 'SET_FORMINFO_VALUES', payload: teacher});
        dispatch({type: 'SET_CLASS', payload: {name: 'addTeacherClass', value: 'add-teacher-form-open'}});
        dispatch({type: 'SET_CLASS', payload: {name: 'displayTeacherClass', value: 'hide-display-teacher'}});
        dispatch({type: 'SET_FORM_BUTTON_TEXT', payload: 'Update Teacher'});
    }
    return <tr>
        {
            teacher.map((teacherDetail, index) => (
                <td key={index}>{Array.isArray(teacherDetail) ? teacherDetail.join(', ') : teacherDetail}</td>)
            )
        }
        <td className='action-field'><BiEdit className="edit" onClick={editTeacherRecord} /> <MdDelete className="delete" onClick={deleteTeacherRecord} /></td>
    </tr>
}

export default TeacherDetail;