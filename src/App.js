import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CrudsPage from './pages/CrudsPage';
import Automacao from './pages/Automacao';
import Particles from './components/Particles'; // Importando o componente de partículas

const App = () => (
  <Router basename="/db_qa"> {/* Configurando o basename para GitHub Pages */}
    <Particles /> {/* Adicionando o fundo animado de partículas */}
    <Header />
    <Routes>
      <Route path="/crudspage" element={<CrudsPage />} />
      <Route path="/crudspage/:sectionId" element={<CrudsPage />} />
      <Route path="/automacao" element={<Automacao />} />
      <Route path="/automacao/:sectionId" element={<Automacao />} />
    </Routes>
  </Router>
);

export default App;
