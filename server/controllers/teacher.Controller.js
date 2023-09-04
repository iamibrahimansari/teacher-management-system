const mongoose = require('mongoose');

const Teacher = require('../models/teacher.Model');

const createNewTeacher = async (req, res) =>{
    const {name, subjects, education, cellphone, email, address} = req.body;
    if(!(name && (subjects.length > 0) && education && cellphone && email && address)){
        return res.status(400).json({error: 'Fill all the fields'});
    }
    const response = new Teacher(req.body);
    if(!response){
        return res.status(400).json({error: 'Something went wrong while creating new teacher'});
    }
    let teacher = null;
    try{
        teacher = await response.save();
    }catch(error){
        return res.status(400).json({error: 'You are trying to create new teacher with duplicate cellphone or email which already available in database'});
    }
    if(!teacher){
        return res.status(400).json({error: 'Something went wrong while saving the teacher in DB'});
    }
    res.status(200).json(teacher); 
}

const getTeachers = async (req, res) =>{
    const teachers = await Teacher.find({});
    if(!Array.isArray(teachers)){
        res.status(400).json({error: 'Something went wrong while fetching the teachers data'});
    }
    
    res.status(200).json(teachers);        
}

const updateTeacher = async (req, res) =>{
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'User doesn\'t exist'})
    }

    try{
        const teacher = await Teacher.findByIdAndUpdate(id, {...req.body}, {new: true});
    }catch(error){
        return res.json('Your updated cellphone or email is associated with other exist teacher');
    }

    if(!teacher){
        return res.status(404).json({error: 'User doesn\'t exist'});
    }

    res.status(200).json(teacher);
}

const deleteTeacher = async (req, res) =>{
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'User doesn\'t exist'});
    }

    const teacher = await Teacher.findByIdAndDelete(id);

    if(!teacher){
        return res.status(404).json({error: 'User doesn\'t exist'});
    }

    res.status(200).json(teacher);
}

module.exports = {
    createNewTeacher,
    getTeachers,
    updateTeacher,
    deleteTeacher
}