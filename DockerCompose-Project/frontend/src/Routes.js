import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import

import Home from './Home';
import Student from './Student';
import Teacher from './Teacher';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
