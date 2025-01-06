import React from 'react';
import { FaRegCopy } from 'react-icons/fa';
import '../layouts/Parte1.css';

const Parte1 = {
  id: 'parte1',
  title: 'Automação de Front-End',
  renderContent: () => {
    const copyToClipboard = () => {
      const codeBlock = `
<dependencies>
  <dependency>
      <groupId>org.seleniumhq.selenium</groupId>
      <artifactId>selenium-java</artifactId>
      <version>4.10.0</version>
  </dependency>
  <dependency>
      <groupId>io.cucumber</groupId>
      <artifactId>cucumber-java</artifactId>
      <version>7.11.0</version>
  </dependency>
  <dependency>
      <groupId>io.cucumber</groupId>
      <artifactId>cucumber-junit</artifactId>
      <version>7.11.0</version>
  </dependency>
</dependencies>`;
      navigator.clipboard.writeText(codeBlock).then(() => {
        alert('Código copiado para a área de transferência!');
      });
    };

    return (
      <div class="parte1-content">
        <h3>Ferramentas Necessárias:</h3>
        <ul>
          <li>Java</li>
          <li>Selenium WebDriver</li>
          <li>Maven</li>
          <li>IDE (Eclipse, IntelliJ IDEA ou VS Code)</li>
          <li>ChromeDriver (ou o driver do navegador de sua preferência)</li>
          <li>Cucumber</li>
        </ul>

        <h3>Conceitos Iniciais:</h3>
        <ul>
          <li>O que é automação de testes?</li>
          <li>Estrutura de um projeto de automação.</li>
          <li>Configurando o ambiente.</li>
        </ul>

        <h3>Estrutura de Pastas no Projeto:</h3>
        <pre>
{`src/main/java: Contém o código-fonte principal.
src/test/java: Contém os testes automatizados.
src/test/resources: Contém arquivos de configuração e dados de teste, incluindo os arquivos .feature do Cucumber.
target: Diretório gerado pelo Maven, onde ficam os relatórios e resultados de build.
pom.xml: Arquivo de configuração do Maven, onde são declaradas as dependências.`}
        </pre>

        <h3>Exemplo:</h3>
        <pre>
{`meu-projeto-automacao/
├── src
│   ├── main
│   │   └── java
│   │       └── br.com.projeto
│   │           └── paginas
│   ├── test
│   │   └── java
│   │       └── br.com.projeto
│   │           └── testes
│   └── test
│       └── resources
│           └── features
├── pom.xml
└── target`}
        </pre>

        <h3>Exercício 1: Configurando o Ambiente</h3>
        <ol>
          <li>Crie um projeto Maven.</li>
          <li>Adicione as dependências do Selenium e Cucumber no <code>pom.xml</code>.</li>
          <li>Configure o ChromeDriver no projeto.</li>
        </ol>
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
{`<dependencies>
  <dependency>
      <groupId>org.seleniumhq.selenium</groupId>
      <artifactId>selenium-java</artifactId>
      <version>4.10.0</version>
  </dependency>
  <dependency>
      <groupId>io.cucumber</groupId>
      <artifactId>cucumber-java</artifactId>
      <version>7.11.0</version>
  </dependency>
  <dependency>
      <groupId>io.cucumber</groupId>
      <artifactId>cucumber-junit</artifactId>
      <version>7.11.0</version>
  </dependency>
</dependencies>`}
          </pre>
        </div>

        <h3>Exercício 2: Primeiro Teste Automático com Cucumber</h3>
        <p>Crie um arquivo <strong>.feature</strong> em <strong>src/test/resources/features</strong> com o seguinte conteúdo:</p>
        <pre>
{`Feature: Login no Sauce Demo

  Scenario: Realizar login com sucesso
    Given que estou na página inicial
    When eu insiro o usuário "standard_user" e senha "secret_sauce"
    And clico no botão de login
    Then devo ser redirecionado para a página de produtos`}
        </pre>

        <h3>Exercício 3: Adicionar Cenários no Gherkin</h3>
        <p>Adicione mais cenários ao arquivo <strong>.feature</strong> para validar diferentes comportamentos, como login inválido e logout.</p>
      </div>
    );
  },
};

export default Parte1;
