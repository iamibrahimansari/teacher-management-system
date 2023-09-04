const router = require('express').Router();

const {
    createNewTeacher,
    getTeachers,
    updateTeacher,
    deleteTeacher
} = require('../controllers/teacher.Controller');

// POST: Create New Teacher
router.post('/', createNewTeacher);

// GET: Get All Teachers
router.get('/', getTeachers);

// PATCH: Update specific teacher
router.patch('/:id', updateTeacher);

// DELETE: Delete specific teacher
router.delete('/:id', deleteTeacher);

module.exports = router;