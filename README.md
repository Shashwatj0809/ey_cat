# Organization Management System

## Overview

The Organization Management System is a web application designed to manage vendors and suppliers efficiently. It allows users to register, view, and manage vendor and supplier data, categorized by departments such as Pipes, Steel, Motors, and Logistics.

## Features

- User registration and authentication
- Add, view, and manage vendors
- Add, view, and manage suppliers
- Export vendor data to Excel format
- Responsive design for mobile and desktop

## Technologies Used

- **Frontend**: React, Vite, Axios, React Router
- **Backend**: Node.js, Express, MongoDB
- **Styling**: CSS (custom styles)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Clone the Repository



### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd Backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `Backend` directory and add your MongoDB URI:

   ```plaintext
   PORT=6060
   MONGODB_URI=mongodb://127.0.0.1:27017/auth_ey
   ```

4. Start the backend server:

   ```bash
   node index.js
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd vite-project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` (or the port specified by Vite).
2. Register a new user account.
3. Use the dashboard to manage vendors and suppliers.
4. Click the "Download Vendors Excel" button to export vendor data.

## File Structure

- **Backend/**
  - `index.js`: Main entry point for the backend server.
  - `Router/router.js`: Defines API routes for user registration, vendor, and supplier management.
  - `model/user_auth.js`: User authentication model.
  - `model/student.js`: Vendor model.
  - `model/teacher.js`: Supplier model.

- **vite-project/**
  - `src/App.jsx`: Main application file that sets up routing.
  - `src/pages/dashboard.jsx`: Dashboard component displaying vendor and supplier statistics.
  - `src/pages/createStudent.jsx`: Component for adding new vendors.
  - `src/pages/createTeacher.jsx`: Component for adding new suppliers.
  - `src/pages/ViewStudents.jsx`: Component for viewing all vendors.
  - `src/pages/AllData.jsx`: Component for viewing all data categorized by department.
  - `src/App.css`: Main CSS file for styling the application.
  - `src/index.css`: Global styles for the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the contributors and the open-source community for their support.
