import { useState } from 'react';
// import '../styles/forms.css';

export default function CreateTeacher() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    employeeId: '',
    phoneNumber: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/teachers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Teacher created successfully!');
        setFormData({
          name: '',
          email: '',
          department: '',
          employeeId: '',
          phoneNumber: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to create teacher');
    }
  };

  return (
    <div className="form-container">
      <h2>Create New Teacher</h2>
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
          <label>Employee ID:</label>
          <input
            type="text"
            value={formData.employeeId}
            onChange={(e) => setFormData({...formData, employeeId: e.target.value})}
            required
          />
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

        <button type="submit" className="submit-btn">Create Teacher</button>
      </form>
    </div>
  );
}