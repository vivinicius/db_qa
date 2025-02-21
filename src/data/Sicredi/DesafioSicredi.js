import React from 'react';
import '../../layouts/Sicredi/DesafioSicredi.css';

const Crud = {
  id: 'desafiosicredi',
  title: 'Desafio Sicredi',
  renderContent: () => {
    return (
      <div className="desafiosicredi-content">
        <h1>
          Desafio <span className="gradient-text2">Sicredi</span>
        </h1>
        <br />
        <iframe 
          src="https://db-api-lf1e.onrender.com/proxy-sicredi" 
          title="Desafio Sicredi"
          className="iframe-container"
          allowFullScreen
        />
      </div>
    );
  },
};

export default Crud;
