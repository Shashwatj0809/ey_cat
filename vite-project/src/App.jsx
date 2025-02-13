import { useState } from 'react'
import Register from './pages/Register'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard';
import CreateStudent from './pages/createStudent';
import CreateTeacher from './pages/createTeacher';
import ViewStudents from './pages/ViewStudents';
import ViewTeachers from './pages/ViewTeachers';
import AllData from './pages/AllData';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create-student" element={<CreateStudent />} />
      <Route path="/create-teacher" element={<CreateTeacher />} />
      <Route path="/view-students" element={<ViewStudents />} />
      <Route path="/view-teachers" element={<ViewTeachers />} />
      <Route path="/all-data" element={<AllData />} />
    </Routes>
  )
}

export default App
