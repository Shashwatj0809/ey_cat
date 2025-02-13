import { useState } from 'react';
// import '../styles/forms.css';

export default function CreateStudent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    rollNumber: '',
    semester: '',
    phoneNumber: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:6060/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Student created successfully!');
        setFormData({
          name: '',
          email: '',
          department: '',
          rollNumber: '',
          semester: '',
          phoneNumber: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to create student');
    }
  };

  return (
    <div className="form-container">
      <h2>Create New Student</h2>
      <form onSubmit={handleSubmit} className="create-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Department:</label>
          <select
            value={formData.department}
            onChange={(e) => setFormData({...formData, department: e.target.value})}
            required
          >
            <option value="">Select Department</option>
            <option value="ECE">Electronics & Comm.</option>
            <option value="CSE">Computer Science</option>
            <option value="MECH">Mechanical Engg.</option>
            <option value="GEO">Geography</option>
          </select>
        </div>

        <div className="form-group">
          <label>Roll Number:</label>
          <input
            type="text"
            value={formData.rollNumber}
            onChange={(e) => setFormData({...formData, rollNumber: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Semester:</label>
          <select
            value={formData.semester}
            onChange={(e) => setFormData({...formData, semester: e.target.value})}
            required
          >
            <option value="">Select Semester</option>
            {[1,2,3,4,5,6,7,8].map(num => (
              <option key={num} value={num}>Semester {num}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Create Student</button>
      </form>
    </div>
  );
}