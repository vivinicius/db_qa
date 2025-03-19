import React, { useState } from 'react';
import axios from 'axios';
import '../../../layouts/Cypress/Correcao.css';
import ReactMarkdown from 'react-markdown';

const cleanMarkdown = (markdown) => {
  return markdown
    // Remove qualquer linha vazia (espaços, tabs ou só \n)
    .replace(/^\s*$(?:\r\n?|\n)/gm, '')
    // Remove quebras extras no final
    .replace(/\n{2,}/g, '\n');
};



// === Função para ler arquivo .txt ===
const readTxtFile = async (txtPath) => {
  const response = await fetch(txtPath);
  const text = await response.text();
  return text;
};

const CorrecaoCrudVeiculoContent = ({ updateExerciseResult }) => {
  const [respostaUsuario, setRespostaUsuario] = useState('');
  const [resultado, setResultado] = useState('');
  const [loading, setLoading] = useState(false);

  // SUA INSTRUÇÃO FIXA
  const instrucaoBase = `
Você é um avaliador técnico que dá feedbacks detalhados. Organize suas respostas de forma clara, usando listas numeradas, negrito, emojis e Markdown para melhor leitura.

Sempre verifique se o uruario fez realmente o desafio proposto.

Sua análise deve seguir rigorosamente o seguinte modelo:

Pontos Positivos:
Liste de forma clara e objetiva os pontos fortes do projeto.
Exemplos:
Organização da estrutura do projeto.
Uso adequado de tecnologias e ferramentas.
Cobertura de cenários importantes (positivos e negativos).
Aplicação de boas práticas (Page Object, comandos customizados, reutilização de código, fixtures, etc.).
Integração com pipeline CI/CD (caso presente).
Uso de relatórios e evidências.
Qualquer diferencial que agregue qualidade ao projeto.

Pontos de Atenção:
Liste pontos que podem ser melhorados ou estão ausentes.
Exemplos:
Nomenclatura inconsistente de arquivos ou variáveis.
Dependência de estado prévio entre testes.
Falta de cenários avançados ou casos de borda.
Boas práticas de codificação não seguidas (código comentado, duplicado, etc.).
README.md pouco detalhado ou inexistente.
Ausência de pipeline CI/CD, ou má configuração do mesmo.
Uso de dados hardcoded ou informações sensíveis no código.
Falta de validação de contratos, tratamento de erros ou testes negativos.

Parecer Geral:
Faça um resumo objetivo da análise, destacando:
Organização geral do projeto.
Se cobre os principais requisitos do desafio.
Pontos positivos predominantes.
Principais pontos de melhoria.

OBS: Não utilize emojis nas respostas.
`;

  const corrigirResposta = async () => {
    setLoading(true);
    setResultado('');

    try {
      // Caminho do .txt no public folder
      const txtPath = process.env.PUBLIC_URL + '/desafio-crud-veiculo.txt';
      console.log('Tentando acessar TXT em:', txtPath);

      // Lê o arquivo txt
      const desafioTexto = await readTxtFile(txtPath);
      console.log('Conteúdo do TXT:', desafioTexto);

      // Junta instrução fixa + desafio do arquivo txt
      const instrucaoFinal = `
${instrucaoBase}

Desafio aplicado:
${desafioTexto}
      `;

      // Faz a requisição para sua API
      const response = await axios.post('https://db-api-lf1e.onrender.com/corrigir', {
        respostaUsuario,
        instrucao: instrucaoFinal,
      });

      const correction = response.data.correção;
      setResultado(correction);

      const isCorrect = correction.toLowerCase().startsWith('correto');
      updateExerciseResult('parte1Exercicio1', isCorrect ? 'correto' : 'incorreto');

    } catch (error) {
      console.error('Erro:', error);
      setResultado('Erro ao corrigir a resposta.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="parte1-content">
      <h1>
        <span className="gradient-text2">Correção: </span> Adicione seu link do repositório git para correção do desafio
      </h1>
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
          disabled={loading}
          className="corrigir-button"
        >
          {loading ? 'Carregando...' : 'Corrigir'}
        </button>
        {resultado && (
  <div className="resultado">
    <strong>*</strong>
    <ReactMarkdown
  components={{
    li: ({node, ...props}) => <li style={{ marginBottom: '0.2rem', lineHeight: '1' }} {...props} />,
    p: ({node, ...props}) => <p style={{ margin: '0', padding: '0' }} {...props} />
  }}
>
  {cleanMarkdown(resultado)}
</ReactMarkdown>


  </div>
)}
      </div>
    </div>
  );
};

const CorrecaoCrudVeiculo = {
  id: 'correcaoCrudVeiculo',
  title: 'Correção',
  renderContent: (props) => <CorrecaoCrudVeiculoContent {...props} />,
};

export default CorrecaoCrudVeiculo;
