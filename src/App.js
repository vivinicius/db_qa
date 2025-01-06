import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Manual from './pages/Manual';
import Automacao from './pages/Automacao';
import Particles from './components/Particles'; // Importando o componente de partículas

const App = () => (
  <Router>
    <Particles /> {/* Adicionando o fundo animado de partículas */}
    <Header />
    <Routes>
      <Route path="/manual" element={<Manual />} />
      <Route path="/automacao" element={<Automacao />} />
      <Route path="/automacao/:sectionId" element={<Automacao />} />
    </Routes>
  </Router>
);

export default App;
