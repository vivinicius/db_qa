import React, { useState } from 'react';
import axios from 'axios';
import { FaRegCopy } from 'react-icons/fa';
import '../layouts/Parte1Exercicio1.css';

const Parte1Exercicio1Content = () => {
  const [respostaUsuario, setRespostaUsuario] = useState('');
  const [resultado, setResultado] = useState('');
  const [loading, setLoading] = useState(false);

  const corrigirResposta = async () => {
    setLoading(true); // Ativa o loading
    setResultado(''); // Reseta o resultado
    try {
      const response = await axios.post('https://db-api-lf1e.onrender.com/corrigir', {
        respostaUsuario,
      });
      setResultado(response.data.correção);
    } catch (error) {
      console.error(error);
      setResultado('Erro ao corrigir a resposta.');
    } finally {
      setLoading(false); // Desativa o loading
    }
  };
  const copyToClipboard = () => {
    const codeBlock = `Feature: Funcionalidades do site Sauce Demo

  # Cenário 1: Login com sucesso
  Scenario: Login com credenciais válidas
    Given que estou na página inicial
    When eu insiro o usuário "standard_user" e senha "secret_sauce"
    And clico no botão de login
    Then devo ser redirecionado para a página de produtos

  # Cenário 2: Login com credenciais inválidas
  Scenario: Login com credenciais inválidas
    Given que estou na página inicial
    When eu insiro o usuário "invalid_user" e senha "invalid_password"
    And clico no botão de login
    Then devo ver uma mensagem de erro dizendo "Epic sadface: Username and password do not match any user in this service."`;
    navigator.clipboard.writeText(codeBlock).then(() => {
      alert('Código copiado para a área de transferência!');
    });
  };

  return (
    <div className="parte1-content">
      <h1>
        Exercício 1 : <span className="gradient-text2">Escrever Cenários em Gherkin para o Site Sauce Demo</span>
      </h1>
      <p>
        <span className="subtitulo-parte1-exericio1">
          Neste exercício, você deve criar um arquivo .feature com pelo menos 5 cenários usando a linguagem Gherkin para o site Sauce Demo.
          Esses cenários devem cobrir funcionalidades como login, logout, navegação e validações básicas.
          O objetivo é que você copie o código abaixo e, com base no template inicial fornecido, escreva cenários adicionais para situações do site.
        </span>
      </p>
      <br />
      <h2>Template do Arquivo <strong>saucedemo.feature</strong></h2>
      <div style={{ position: 'relative', marginBottom: '1rem' }}>
        <button
          onClick={copyToClipboard}
          style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.5rem',
            color: '#fff',
          }}
        >
          <FaRegCopy />
        </button>
        <pre
          style={{
            backgroundColor: '#272834',
            padding: '1rem',
            borderRadius: '4px',
            overflowX: 'auto',
          }}
        >
{`Feature: Funcionalidades do site Sauce Demo

  # Cenário 1: Login com sucesso
  Scenario: Login com credenciais válidas
    Given que estou na página inicial
    When eu insiro o usuário "standard_user" e senha "secret_sauce"
    And clico no botão de login
    Then devo ser redirecionado para a página de produtos

  # Cenário 2: Login com credenciais inválidas
  Scenario: Login com credenciais inválidas
    Given que estou na página inicial
    When eu insiro o usuário "invalid_user" e senha "invalid_password"
    And clico no botão de login
    Then devo ver uma mensagem de erro dizendo "Epic sadface: Username and password do not match any user in this service."`}
        </pre>
      </div>
      <br></br>
      <h2>O que você deve fazer</h2>
      <br></br>
        <ul>
          <li>Copie o código acima clicando no botão de cópia.</li>
          <li>Salve o conteúdo em um arquivo chamado <strong>saucedemo.feature</strong>.</li>
          <li>Adicione pelo menos mais <strong>3 cenários</strong>, como:
            <ul>
              <li>Ordenar produtos por preço.</li>
              <li>Remover um produto do carrinho.</li>
              <li>Verificar mensagens de erro ao tentar fazer login com campos vazios.</li>
            </ul>
          </li>
          </ul>
          <br></br>
      <h2>Como corrigir:</h2>
      <br></br>
      <p>1 - Copie todo conteúdo do seu arquivo <strong>.feature</strong> com os novos cenários criados.</p>
      <p>2 - Cole todo conteúdo na caixa de texto a seguir.</p>
      <p>3 - Clique em Corrigir.</p>
      <br></br>
      {/* Integração da API */}
      <div className="parte1Exercicio1-but">
        <textarea
          value={respostaUsuario}
          onChange={(e) => setRespostaUsuario(e.target.value)}
          placeholder="Cole seu arquivo .feature aqui..."
          rows={10}
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

const Parte1Exercicio1 = {
  id: 'parte1Exercicio1',
  title: 'Exercício 1',
  renderContent: () => <Parte1Exercicio1Content />,
};

export default Parte1Exercicio1;
