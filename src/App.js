// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
// Diğer sayfa bileşenlerini buraya ekleyebilirsiniz (örneğin About, Contact vb.)

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Diğer sayfalar için Route ekleyin */}
        {/* Örneğin:
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        */}
      </Routes>
    </Router>
  );
}

export default App;
