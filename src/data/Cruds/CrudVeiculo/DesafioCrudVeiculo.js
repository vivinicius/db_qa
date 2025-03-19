import React from 'react';
import '../../../layouts/Cypress/DesafioCypress.css';

const DesafioCrudVeiculo = {
  id: 'desafioCrudVeiculo',
  title: 'Crud Veiculo',
  renderContent: () => {
    return (
      <div className="desafiocypress-content">
        <h1>
          Desafio <span className="gradient-text2">Crud Veiculo</span>
        </h1>
        <br />

        {/* 🔥 Agora usa process.env.PUBLIC_URL para incluir o basename */}
        <iframe 
          src={`${process.env.PUBLIC_URL}/DesafioCrudVeiculoDbServer.pdf`} 
          title="Desafio CrudVeiculo"
          className="pdf-viewer"
        />
      </div>
    );
  },
};

export default DesafioCrudVeiculo;
