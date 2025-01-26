import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CV from './pages/CV';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;