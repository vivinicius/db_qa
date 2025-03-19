import React from 'react';
import '../../../layouts/Cypress/DesafioCypress.css';

const DesafioSelenium = {
  id: 'desafioSelenium',
  title: 'Selenium',
  renderContent: () => {
    return (
      <div className="desafiocypress-content">
        <h1>
          Desafio <span className="gradient-text2">Selenium</span>
        </h1>
        <br />

        {/* 🔥 Agora usa process.env.PUBLIC_URL para incluir o basename */}
        <iframe 
          src={`${process.env.PUBLIC_URL}/DesafioSeleniumDbServer.pdf`} 
          title="Desafio Selenium"
          className="pdf-viewer"
        />
      </div>
    );
  },
};

export default DesafioSelenium;
