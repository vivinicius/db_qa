import React from 'react';
import '../../../layouts/Cypress/DesafioCypress.css';

const DesafioSicredi = {
  id: 'desafioSicredi',
  title: 'Sicredi',
  renderContent: () => {
    return (
      <div className="desafiocypress-content">
        <h1>
          Desafio <span className="gradient-text2">Sicredi</span>
        </h1>
        <br />

        {/* 🔥 Agora usa process.env.PUBLIC_URL para incluir o basename */}
        <iframe 
          src={`${process.env.PUBLIC_URL}/DesafioSeleniumDbServer.pdf`} 
          title="Desafio Sicredi"
          className="pdf-viewer"
        />
      </div>
    );
  },
};

export default DesafioSicredi;
