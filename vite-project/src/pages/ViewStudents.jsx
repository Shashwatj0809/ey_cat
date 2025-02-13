import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Add this mapping object at the top of the component
const departmentMapping = {
  'ECE': 'Pipes',
  'CSE': 'Steel',
  'MECH': 'Motors',
  'GEO': 'Logistics'
};

export default function ViewStudents() {
  const [students, setStudents] = useState([]);
  const [department, setDepartment] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, [department]);

  const fetchStudents = async () => {
    try {
      const url = department 
        ? `${import.meta.env.VITE_API_URL}/students?department=${department}`
        : `${import.meta.env.VITE_API_URL}/students`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.success) {
        setStudents(data.students);
        setError(null);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to fetch students');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-center">
      <div className="view-container">
        <div className="view-content">
          {/* Header Section */}
          <div className="view-header">
            <h1 className="view-title">Vendor Directory</h1>
            <Link to="/create-student" className="add-button">
              Add New Vendor
            </Link>
          </div>

          {/* Filter Section */}
          <div className="filter-section">
            <div className="filter-group">
              <label className="filter-label">Filter by Department:</label>
              <select 
                value={department} 
                onChange={(e) => setDepartment(e.target.value)}
                className="filter-select"
              >
                <option value="">All Departments</option>
                <option value="ECE">Pipes</option>
                <option value="CSE">Steel</option>
                <option value="MECH">Motors</option>
                <option value="GEO">Logistics</option>
              </select>
            </div>
          </div>

          {/* Loading and Error States */}
          {loading && (
            <div className="loading-container">
              <div className="loading-spinner"></div>
            </div>
          )}
          
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {/* Table Section */}
          {!loading && !error && (
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Vendor ID</th>
                    <th>Contract Term</th>
                    <th>Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  {students.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="empty-message">
                        No vendors found
                      </td>
                    </tr>
                  ) : (
                    students.map((student) => (
                      <tr key={student._id}>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>
                          <span className="department-badge">
                            {departmentMapping[student.department] || student.department}
                          </span>
                        </td>
                        <td>{student.rollNumber}</td>
                        <td>{student.semester}</td>
                        <td>{student.phoneNumber}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Summary Section */}
          {!loading && !error && students.length > 0 && (
            <div className="summary-section">
              Total Vendors: {students.length}
              {department && ` in ${departmentMapping[department]} department`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 