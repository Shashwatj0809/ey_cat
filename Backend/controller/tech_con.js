const Teacher = require('../model/teacher'); // Ensure the correct path

async function createTeacher(req, res) {
    try {
        const teacher = new Teacher(req.body);
        await teacher.save();
        res.status(201).json({ success: true, message: "Teacher created successfully", teacher });
    } catch (error) {
        console.error("❌ Error creating teacher:", error);
        res.status(400).json({ success: false, message: error.message });
    }
}

async function getAllTeachers(req, res) {
    try {
        const teachers = await Teacher.find({});
        res.json({ success: true, teachers });
    } catch (error) {
        console.error("❌ Error fetching all teachers:", error);
        res.status(500).json({ success: false, message: error.message });
    }
}

async function getTeachersByDepartment(req, res) {
    try {
        const teachers = await Teacher.find({ department: req.params.department });
        res.json({ 
            success: true, 
            department: req.params.department,
            count: teachers.length,
            teachers 
        });
    } catch (error) {
        console.error("❌ Error fetching teachers:", error);
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = { createTeacher, getAllTeachers, getTeachersByDepartment }; // ✅ Correct exports
