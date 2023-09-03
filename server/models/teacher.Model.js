const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subjects: {
        type: Array,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    cellphone: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('teachers', TeacherSchema);