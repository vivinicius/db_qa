import React, { useState } from 'react';
import axios from 'axios';
import '../../layouts/Parte1Exercicio1.css';

const CorrecaoCrudContent = ({ updateExerciseResult }) => {
  const [respostaUsuario, setRespostaUsuario] = useState('');
  const [resultado, setResultado] = useState('');
  const [loading, setLoading] = useState(false);
  const instrucao = `
    "Você é um desenvolvedor de software sênior e atuará como avaliador técnico de um repositório no GitHub. O repositório contém a solução de um desafio técnico para o programa de trainee da DBServer. Analise o código-fonte presente no repositório com base nos critérios técnicos abaixo, considerando também o enunciado do desafio fornecido e a senioridade do candidato informada.
 
Critérios técnicos a serem analisados:
        `

  const corrigirResposta = async () => {
    setLoading(true); // Ativa o loading
    setResultado(''); // Reseta o resultado
    try {
      const response = await axios.post('https://db-api-lf1e.onrender.com/corrigir', {
        respostaUsuario,instrucao
      });
      const correction = response.data.correção;
      setResultado(correction);

      // Determina se a resposta é correta ou incorreta
      const isCorrect = correction.toLowerCase().startsWith('correto');
      updateExerciseResult('parte1Exercicio1', isCorrect ? 'correto' : 'incorreto');
    } catch (error) {
      console.error(error);
      setResultado('Erro ao corrigir a resposta.');
    } finally {
      setLoading(false); // Desativa o loading
    }
  };

  return (
    <div className="parte1-content">
      <h1>
      <span className="gradient-text2">Correção: </span> Adicione seu link do repositório git para correção do desafio
      </h1>
      {/* Integração da API */}
      <div className="parte1Exercicio1-but">
        <textarea
          value={respostaUsuario}
          onChange={(e) => setRespostaUsuario(e.target.value)}
          placeholder="Cole seu link do repositório aqui..."
          rows={1}
          className="input-area"
        />
        <button
          onClick={corrigirResposta}
          disabled={loading} // Desabilita o botão enquanto carrega
          className="corrigir-button"
        >
          {loading ? 'Carregando...' : 'Corrigir'}
        </button>
        {resultado && (
          <div className="resultado">
            <strong>Resultado:</strong>
            <p>{resultado}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const CorrecaoCrud = {
  id: 'correcaoCrud',
  title: 'Correção',
  renderContent: (props) => <CorrecaoCrudContent {...props} />,
};

export default CorrecaoCrud;
