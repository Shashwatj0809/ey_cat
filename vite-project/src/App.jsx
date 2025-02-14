import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CreateStudent from './pages/CreateStudent';
import CreateTeacher from './pages/CreateTeacher';
import ViewStudents from "./pages/ViewStudents";
import ViewTeachers from "./pages/ViewTeachers";
import AllData from "./pages/AllData";
import RiskData from "./pages/RiskData";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-student" element={<CreateStudent />} />
        <Route path="/create-teacher" element={<CreateTeacher />} />
        <Route path="/view-students/:department?" element={<ViewStudents />} />
        <Route path="/view-teachers/:department?" element={<ViewTeachers />} />
        <Route path="/all-data" element={<AllData />} />
        <Route path="/risk-data" element={<RiskData />} />
      </Routes>
  );
}

export default App;
