import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import JavaPage from './pages/JavaPage';
import Automacao from './pages/Automacao';
import CypressPage from './pages/CypressPage';
import SicrediPage from './pages/SicrediPage';
import Particles from './components/Particles'; // Importando o componente de partículas

const App = () => (
  <Router basename="/db_qa"> {/* Configurando o basename para GitHub Pages */}
    <Particles /> {/* Adicionando o fundo animado de partículas */}
    <Header />
    <Routes>
      <Route path="/sicredipage" element={<SicrediPage />} />
      <Route path="/sicredipage/:sectionId" element={<SicrediPage />} />
      <Route path="/javapage" element={<JavaPage />} />
      <Route path="/javapage/:sectionId" element={<JavaPage />} />
      <Route path="/cypresspage" element={<CypressPage />} />
      <Route path="/cypresspage/:sectionId" element={<CypressPage />} />
      <Route path="/automacao" element={<Automacao />} />
      <Route path="/automacao/:sectionId" element={<Automacao />} />
    </Routes>
  </Router>
);

export default App;
