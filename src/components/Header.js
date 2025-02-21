import React from 'react';
import { Link } from 'react-router-dom';
import '../layouts/Header.css';

const Header = () => (
  <header className="header">
    <img 
      src={`${process.env.PUBLIC_URL}/dblogo.png`} // Usa o PUBLIC_URL para ajustar o caminho
      alt="Logo da Empresa" 
      className="header-logo" 
    />
    <nav className="nav">
      <Link to="/sicredipage">Sicredi</Link>
      <Link to="/javapage">Java</Link>
      <Link to="/automacao">Automação</Link>
    </nav>
  </header>
);

export default Header;
