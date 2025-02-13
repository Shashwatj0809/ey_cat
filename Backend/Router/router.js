const express = require('express');
const router = express.Router();
const { userRegistration, userlogin } = require('../controller/auth_controller');
const { createStudent, getAllStudents, getStudentsByDepartment } = require('../controller/stud_cont');
const { createTeacher, getAllTeachers, getTeachersByDepartment } = require('../controller/tech_con');

// Auth routes
router.post('/register', userRegistration);
router.post('/login', userlogin);

// Student routes
router.post('/students', createStudent);
router.get('/students', async (req, res) => {
    const { department } = req.query;
    if (department) {
        await getStudentsByDepartment(req, res);
    } else {
        await getAllStudents(req, res);
    }
});

// Teacher routes
router.post('/teachers', createTeacher);
router.get('/teachers', async (req, res) => {
    const { department } = req.query;
    if (department) {
        await getTeachersByDepartment(req, res);
    } else {
        await getAllTeachers(req, res);
    }
});

module.exports = router;