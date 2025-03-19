import React, { useState } from 'react';
import axios from 'axios';
import { FaRegCopy } from 'react-icons/fa';
import '../../../layouts/Parte1Exercicio1.css';

const Parte1Exercicio1Content = ({ updateExerciseResult }) => {
  const [respostaUsuario, setRespostaUsuario] = useState('');
  const [resultado, setResultado] = useState('');
  const [loading, setLoading] = useState(false);
  const instrucao = `
    Avalie a resposta do usuário. Indique se está correta e forneça explicações.
    Voce está avaliando um exercicio passado pra um candidado:
    Escrever Cenários em Gherkin para o Site Sauce Demo
    Neste exercício, o candidato deve criar um arquivo .feature com pelo menos 5 cenários usando a linguagem Gherkin para o site Sauce Demo.
    Esses cenários devem cobrir funcionalidades como login, logout, navegação e validações básicas.
    O objetivo é que o usuario copie o código abaixo e, com base no template inicial fornecido, escreva cenários adicionais para situações do site.
    Template inicial:
    Feature: Funcionalidades do site Sauce Demo

    Scenario: Login com credenciais válidas
    Given que estou na página inicial
    When eu insiro o usuário "standard_user" e senha "secret_sauce"
    And clico no botão de login
    Then devo ser redirecionado para a página de produtos

    Scenario: Login com credenciais inválidas
    Given que estou na página inicial
    When eu insiro o usuário "invalid_user" e senha "invalid_password"
    And clico no botão de login
    Then devo ver uma mensagem de erro dizendo "Epic sadface: Username and password do not match any user in this service."

    Lembrando que o usuario devera criar novos cenários e não enviar apenas os cenarios informados no template.
    Responda em no máximo 100 palavras. Não inclua justificativas adicionais.
    
    Sua resposta deve sempre começar com Correto ou Incorreto, não deve ter meio termo.
    
    Exemplo:"Correto, resto da correção" ou "Incorreto, resto da correção"

    Nao esqueça de sempre verificar se o usuario está fazendo ou nao cenários diferentes dos do template. Leia os cenários fornecidos na resposta do usuário
    e se por acaso nao tiver nenhum diferente dos dois cenarios do template a resposta está incorreta.

    Pre requisitos para sua avaliação:
    
    1 - Listar todos os cenarios que o usuario trazer (se trazer)
    2 - Caso o usuario não traga todos os 5 cenarios, recomendar nome de cenários que ele poderia ter criado.
    3 - Verificar se o usuario está fazendo ou nao cenários diferentes dos do template.
    4 - Responda em no máximo 100 palavras.
    5 - Sempre iniciar sua resposta com Correto ou Incorreto.

    Resposta do usuário:`

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

  Scenario: Login com credenciais válidas
    Given que estou na página inicial
    When eu insiro o usuário "standard_user" e senha "secret_sauce"
    And clico no botão de login
    Then devo ser redirecionado para a página de produtos

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
  renderContent: (props) => <Parte1Exercicio1Content {...props} />,
};

export default Parte1Exercicio1;
