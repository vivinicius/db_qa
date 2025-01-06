import React from 'react';
import { Link } from 'react-router-dom';
import '../layouts/Header.css';

const Header = () => (
  <header className="header">
    <img 
      src="/dblogo.png" /* Substitua pelo caminho da sua imagem */
      alt="Logo da Empresa" 
      className="header-logo" 
    />
    <nav className="nav">
      <Link to="/manual">Manual</Link>
      <Link to="/automacao">Automação</Link>
    </nav>
  </header>
);

export default Header;
