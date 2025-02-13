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
      const response = await fetch('/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Vendor added successfully!');
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
      alert('Failed to add vendor');
    }
  };

  return (
    <div className="container-center">
      <div className="form-container">
        <h2>Add New Vendor</h2>
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
              <option value="ECE">Pipes</option>
              <option value="CSE">Steel</option>
              <option value="MECH">Motors</option>
              <option value="GEO">Logistics</option>
            </select>
          </div>

          <div className="form-group">
            <label>Vendor ID:</label>
            <input
              type="text"
              value={formData.rollNumber}
              onChange={(e) => setFormData({...formData, rollNumber: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>Contract Term:</label>
            <input
              type="text"
              value={formData.semester}
              onChange={(e) => setFormData({...formData, semester: e.target.value})}
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

          <button type="submit" className="submit-btn">Add Vendor</button>
        </form>
      </div>
    </div>
  );
}