import {useState} from 'react';

import UserDetail from '../userDetail/UserDetail';

import './displayUsers.css';

const users = [
    {
        id: 1,
        name: 'Rakesh Sharma',
        subjects: ['Mathematics', 'C++', 'Java', 'Python'],
        education: 'BTech',
        cellphone: 9167453210,
        email: 'raskeshsharma@gmail.com',
        address: 'Gandhi nagar, home no: 10, Ambikapur, Surguja, (CG)'
    },
    {
        id: 2,
        name: 'Rakesh Sharma',
        subjects: ['Mathematics', 'C++', 'Java', 'Python'],
        education: 'BTech',
        cellphone: 9167453210,
        email: 'raskeshsharma@gmail.com',
        address: 'Gandhi nagar, home no: 10, Ambikapur, Surguja, (CG)'
    },
    {
        id: 3,
        name: 'Rakesh Sharma',
        subjects: ['Mathematics', 'C++', 'Java', 'Python'],
        education: 'BTech',
        cellphone: 9167453210,
        email: 'raskeshsharma@gmail.com',
        address: 'Gandhi nagar, home no: 10, Ambikapur, Surguja, (CG)'
    },
    {
        id: 4,
        name: 'Rakesh Sharma',
        subjects: ['Mathematics', 'C++', 'Java', 'Python'],
        education: 'BTech',
        cellphone: 9167453210,
        email: 'raskeshsharma@gmail.com',
        address: 'Gandhi nagar, home no: 10, Ambikapur, Surguja, (CG)'
    },
    {
        id: 5,
        name: 'Rakesh Sharma',
        subjects: ['Mathematics', 'C++', 'Java', 'Python'],
        education: 'BTech',
        cellphone: 9167453210,
        email: 'raskeshsharma@gmail.com',
        address: 'Gandhi nagar, home no: 10, Ambikapur, Surguja, (CG)'
    }
]

const header = ['S/N', 'Name', 'Subjects', 'Education', 'Contact', 'Email', 'Address', 'Actions'];

const DisplayUsers = ({setAddUserClass, displayUserClass, setDisplayUserClass}) =>{
    const handleClass = () =>{
        setAddUserClass('add-user-form-open');
        setDisplayUserClass('hide-display-user');
    }
    return <div className={`display-users ${displayUserClass}`}>
        <h1>User Management System</h1>
        <table>
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
                users.map(user => <UserDetail key={user.id} {...user} />)
            }
            </tbody>
            <tfoot>
                <tr>
                    {
                        header.map((element, index) => <th key={index}>{element}</th>)
                    }
                </tr>
            </tfoot>
        </table>
        <button type='button' onClick={handleClass}>Add New Teacher</button>
    </div>
}

export default DisplayUsers;