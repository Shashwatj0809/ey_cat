import { useState, useEffect } from 'react';

export default function ViewTeachers() {
  const [teachers, setTeachers] = useState([]);
  const [department, setDepartment] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTeachers();
  }, [department]);

  const fetchTeachers = async () => {
    try {
      const url = department 
        ? `http://localhost:6060/api/teachers/department/${department}`
        : 'http://localhost:6060/api/teachers';
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.success) {
        setTeachers(data.teachers);
        setError(null);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to fetch teachers');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">View Suppliers</h1>
      
      <div className="mb-4">
        <select 
          value={department} 
          onChange={(e) => setDepartment(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Departments</option>
          <option value="ECE">Electronics & Comm.</option>
          <option value="CSE">Computer Science</option>
          <option value="MECH">Mechanical Engg.</option>
          <option value="GEO">Geography</option>
        </select>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Department</th>
              <th className="border p-2">Subject</th>
              <th className="border p-2">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher._id}>
                <td className="border p-2">{teacher.name}</td>
                <td className="border p-2">{teacher.email}</td>
                <td className="border p-2">{teacher.department}</td>
                <td className="border p-2">{teacher.subject}</td>
                <td className="border p-2">{teacher.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 