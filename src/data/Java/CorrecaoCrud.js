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
 
1. Linguagem JAVA:
    Avaliar o uso correto de sintaxe e semântica, como tipos de dados, estruturas de controle e coleções.
    Identificar o uso de recursos avançados, como Streams e Expressões Lambda.
 
2. Programação Orientada a Objetos (POO):
    Verificar a criação de classes e objetos, além de herança, abstração, polimorfismo, encapsulamento, coesão e acoplamento.
 
3. SOLID:
    Avaliar a aplicação dos princípios de design SOLID.
 
4. Clean Code:
    Analisar nomes de variáveis, funções, comentários, formatação e tratamento de erros.
 
5. Design Patterns:
    Identificar a aplicação de padrões de projeto (Singleton, Factory, Builder, Strategy, etc.).
 
6. CI/CD:
    Avaliar configurações para automação de builds, testes e deploys.
 
7. Testes Unitários:
    Examinar a criação e execução de testes unitários com frameworks como JUnit.
 
8. Testes de Integração:
    Verificar o uso de ferramentas como Mockito e Wiremock.
 
9. Docker:
    Avaliar o uso de Docker e Docker Compose.
 
10. Spring Boot:
    Analisar a implementação de controllers, services, repositories, models e DTOs.
    Foi usado e configurado o swagger?
 
11. Versionamento de Dados:
    Examinar o uso de ferramentas como Flyway para migração e controle de versões de banco de dados.
 
12. Banco Relacional:
    Avaliar a modelagem de entidades, relacionamentos e consultas SQL.
 
13. Banco Não Relacional:
    Analisar a configuração de bancos de dados não relacionais.
 
14. Mensageria:
    Verificar a configuração e uso de tópicos Kafka, producers e consumers.
 
15. REST:
    Avaliar a criação e consumo de APIs RESTful.
 
 
16. Arquitetura:
    Examinar padrões arquiteturais e práticas relacionadas à escalabilidade e design de APIs.
 
Instruções de análise:
 
1. Identifique os pontos positivos e negativos de cada critério técnico acima.
2. Baseando-se na SENIORIDADE informada abaixo, ajuste a profundidade e rigor da análise. Por exemplo:
    Para candidatos trainees, priorize aspectos básicos e a compreensão geral.
    Para candidatos sêniors, priorize práticas avançadas, padrões, eficiência e arquitetura.
3. Classifique a solução em relação à senioridade apresentada: Trainee, Júnior, Pleno ou Sênior. Justifique a classificação com base na análise técnica.
4. Relacione a qualidade do código com os requisitos do enunciado do desafio fornecido mais abaixo: 

 
Ao final, forneça um relatório detalhado com:
 
- Feedback sobre cada critério.
- Sugestões de melhorias para os pontos fracos identificados.
- Um resumo geral com a classificação final e justificativas."
- Uma nota de 0 - 10, sendo quanto maior a nota melhor o candidato foi no desafio.
 
 
Desafio aplicado:
 
SENIORIDADE: traine
 
ENUNCIADO DO DESAFIO:
 
    Desafio CRUD Pessoa
 
    Crie um projeto Java usando Spring Boot que implemente um CRUD para as entidades Pessoa e Endereço, que têm um relacionamento de um-para-muitos.  
 
    A entidade Pessoa deve ter os seguintes campos: ID, Nome (obrigatório), Data Nascimento, CPF (obrigatório e não pode haver dois iguais na base de dados)
 
    A entidade Endereço deve ter os seguintes campos:  ID, Rua, Número, Bairro, Cidade, Estado, CEP
 
    Funcionalidades esperadas: 
    Listar todas as pessoas e seus respectivos endereços 
    Criar uma nova pessoa com um ou mais endereços 
    Atualizar os dados de uma pessoa e/ou seu(s) endereço(s) 
    Excluir uma pessoa e todos os seus endereços 
    Mostrar a Idade da Pessoa
 
    Obs:  
    Lembre-se de implementar validações básicas para os campos obrigatórios e tratamento de exceções.  
    Persistir os dados em banco de dados H2  
    Todas as respostas da API devem ser em JSON
 
    Pontos a serem avaliados: 
        Qualidade de código, estrutura, arquitetura e organização do projeto 
        Boas práticas de programação 
        Alcance dos objetivos propostos. 
        REST 
        Testes 
    Será um diferencial se: 
        houver testes de integração 
        houver  Swagger
        Poder informar qual endereço é o principal da pessoa 
        Fizer Paginação ao listar todas as Pessoas
        
        REPOSITORIO GIT DO DESAFIO:
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
        Correção: <span className="gradient-text2">Adicione seu link do repositório git para correção do desafio</span>
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
