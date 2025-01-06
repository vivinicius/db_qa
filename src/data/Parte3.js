import React, { useState } from 'react';
import axios from 'axios';
import '../layouts/Parte3.css';

export const Parte3Content = () => {
  const [respostaUsuario, setRespostaUsuario] = useState('');
  const [resultado, setResultado] = useState('');
  const pergunta = 'Crie uma variável em Java para armazenar um número inteiro chamado "idade".';

  const corrigirResposta = async () => {
    try {
      const response = await axios.post('https://db-api-lf1e.onrender.com/corrigir', {
        pergunta,
        respostaUsuario,
      });
      setResultado(response.data.correção);
    } catch (error) {
      console.error(error);
      setResultado('Erro ao corrigir a resposta.');
    }
  };

  return (
    <div className="parte3-content">
      <h3>{pergunta}</h3>
      <textarea
        value={respostaUsuario}
        onChange={(e) => setRespostaUsuario(e.target.value)}
        placeholder="Digite sua resposta aqui..."
        rows={5}
      />
      <button
        onClick={corrigirResposta}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#3f8c94',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Corrigir
      </button>
      {resultado && (
        <div
          style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: '#f9f9f9',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }}
        >
          <strong>Resultado:</strong>
          <p>{resultado}</p>
        </div>
      )}
    </div>
  );
};

const Parte3 = {
  id: 'parte3',
  title: 'Exercício API',
  renderContent: () => <Parte3Content />,
};

export default Parte3;
