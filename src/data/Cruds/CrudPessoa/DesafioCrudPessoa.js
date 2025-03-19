import React from 'react';
import '../../../layouts/Cypress/DesafioCypress.css';

const DesafioCrudPessoa = {
  id: 'desafioCrudPessoa',
  title: 'Crud Pessoa',
  renderContent: () => {
    return (
      <div className="desafiocypress-content">
        <h1>
          Desafio <span className="gradient-text2">Crud Pessoa</span>
        </h1>
        <br />

        {/* 🔥 Agora usa process.env.PUBLIC_URL para incluir o basename */}
        <iframe 
          src={`${process.env.PUBLIC_URL}/DesafioCrudPessoaDbServer.pdf`} 
          title="Desafio CrudPessoa"
          className="pdf-viewer"
        />
      </div>
    );
  },
};

export default DesafioCrudPessoa;
