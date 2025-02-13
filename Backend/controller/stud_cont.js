const Student = require('../model/student'); // ✅ Correct import

// ✅ Create Student
async function createStudent(req, res) {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json({ success: true, message: "Student created successfully", student });
    } catch (error) {
        console.error("❌ Error creating student:", error);
        res.status(400).json({ success: false, message: error.message });
    }
}

// ✅ Get All Students
async function getAllStudents(req, res) {
    try {
        const students = await Student.find({});
        res.json({ success: true, students });
    } catch (error) {
        console.error("❌ Error fetching all students:", error);
        res.status(500).json({ success: false, message: error.message });
    }
}

// ✅ Get Students by Department
async function getStudentsByDepartment(req, res) {
    try {
        const { department } = req.query;
        const students = await Student.find({ department });
        res.json({ 
            success: true, 
            department,
            count: students.length,
            students 
        });
    } catch (error) {
        console.error("❌ Error fetching students:", error);
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = { 
    createStudent, 
    getAllStudents,
    getStudentsByDepartment 
}; // ✅ Correct exports
