// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import StudentDashboard from './pages/StudentDashboard';
import EducatorDashboard from './pages/EducatorDashboard';
import Profile from './pages/Profile';
import CourseMaterials from './pages/CourseMaterials';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/educator" element={<EducatorDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/course-materials" element={<CourseMaterials />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
