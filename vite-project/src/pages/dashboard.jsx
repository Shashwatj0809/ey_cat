import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Building,
  GraduationCap,
  UserCheck,
  Search,
  UserPlus,
  Users
} from "lucide-react";
 

export default function Dashboard() {
  const [expandedDepartment, setExpandedDepartment] = useState(null);
  const navigate = useNavigate();

  const departments = [
    { name: "ECE", label: "Electronics & Comm." },
    { name: "CSE", label: "Computer Science" },
    { name: "MECH", label: "Mechanical Engg." },
    { name: "GEO", label: "Geography" },
  ];

  const handleStudentClick = (dept) => {
    navigate(`/create-student?department=${dept}`);
  };

  const handleTeacherClick = (dept) => {
    navigate(`/create-teacher?department=${dept}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Students</h2>
          <div className="space-y-2">
            <Link to="/create-student" className="block text-blue-500 hover:underline">
              Add New Student
            </Link>
            <Link to="/view-students" className="block text-blue-500 hover:underline">
              View All Students
            </Link>
          </div>
        </div>

        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Teachers</h2>
          <div className="space-y-2">
            <Link to="/create-teacher" className="block text-blue-500 hover:underline">
              Add New Teacher
            </Link>
            <Link to="/view-teachers" className="block text-blue-500 hover:underline">
              View All Teachers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
