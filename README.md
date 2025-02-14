Teach Stack- React.js, Node.js, express , postman, python
Editor- VS Code, Google colab

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



![download](https://github.com/user-attachments/assets/e390630a-5916-49cf-bb1d-26f997abc9b7)

## Risk Managment

isk Management Model (Python)
🔹 Overview
The Risk Management Model predicts potential risks in an organization based on factors like:

Financial Risk
Cybersecurity Risk
Compliance Risk
Operational Risk
Market Risk
The model uses Machine Learning (Random Forest Classifier) to classify risk as:

🟢 Low Risk (0)
🔴 High Risk (1)
🔹 How It Works
Generate a Risk Dataset

A synthetic dataset is created with random values for risk factors.
This dataset is used to train the model.
Train a Machine Learning Model

The model is trained using RandomForestClassifier from scikit-learn.
The dataset is split into 80% training and 20% testing.
The trained model is saved as risk_model.pkl using joblib.
Risk Prediction API

A Flask API (risk_api.py) is created.
It takes input data (financial risk, cybersecurity risk, etc.).
The model predicts if the risk is High (1) or Low (0).
The result is sent to the Node.js backend, which forwards it to the React frontend.


##File Structure
- Backend/
  - index.js                 # Main entry point for the backend
  - Router/router.js         # API routes for user registration, vendors, and suppliers
  - model/user_auth.js       # User authentication model
  - model/student.js         # Vendor model
  - model/teacher.js         # Supplier model
  - risk_api.py              # Flask API for risk management
  - risk_model.pkl           # Trained risk model (Machine Learning)

- vite-project/
  - src/App.jsx              # Main React app
  - src/pages/dashboard.jsx  # Dashboard for vendor & supplier statistics
  - src/pages/createStudent.jsx # Page for adding vendors
  - src/pages/createTeacher.jsx # Page for adding suppliers
  - src/pages/ViewStudents.jsx  # View vendors
  - src/pages/AllData.jsx       # View all data categorized by department
  - src/pages/RiskData.jsx      # Risk analysis page
  - src/App.css                 # Main styling
  - src/api/config.js           # API configurations
ting.


## Contributing




Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the contributors and the open-source community for their support.
