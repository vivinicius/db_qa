import React from 'react';
import '../../layouts/Cypress/DesafioCypress.css';

const DesafioCypress = {
  id: 'desafioCypress',
  title: 'Desafio Cypress',
  renderContent: () => {
    return (
      <div className="desafiocypress-content">
        <h1>
          Desafio <span className="gradient-text2">Cypress</span>
        </h1>
        <br />

        {/* 🔥 Agora usa process.env.PUBLIC_URL para incluir o basename */}
        <iframe 
          src={`${process.env.PUBLIC_URL}/DesafioCypressDbServer.pdf`} 
          title="Desafio Cypress"
          className="pdf-viewer"
        />
      </div>
    );
  },
};

export default DesafioCypress;
