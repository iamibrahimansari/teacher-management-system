import {BiEdit} from 'react-icons/bi';
import {MdDelete} from 'react-icons/md';

import './userDetail.css';

const UserDetail = ({id, name, subjects, education, cellphone, email, address}) =>{
    const user = [id, name, subjects, education, cellphone, email, address];
    return <tr>
        {
            user.map((userDetail, index) => (
                <td key={index}>{Array.isArray(userDetail) ? userDetail.join(' ') : userDetail}</td>)
            )
        }
        <td className='action-field'><BiEdit className="edit" /> <MdDelete className="delete" /></td>
    </tr>
}

export default UserDetail;