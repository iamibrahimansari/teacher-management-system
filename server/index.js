// import packages which are installed by yarn
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// import local things
const teacherRoute = require('./routes/teacher.Route');

// Environment variables
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

// create express app
const app = express();

// origin from we can access this backedn route
const corsOptions = {
  origin: 'https://teacher-management-system-app.onrender.com',
  optionsSuccessStatus: 200
};

// middlewares
app.use(express.json()); // to communicate between frontend and backend
app.use(cors(corsOptions));

// routes
app.use('/api/teachers', teacherRoute);

// database connection
const dbConnection = async () =>{
    try{
        await mongoose.connect(MONGO_URL);
        app.listen(PORT, () => console.log('Database connected & Server is running on port: ' + PORT));
    }catch(error){
        console.error('Database connection error:', error.message);
    }
}

dbConnection();

