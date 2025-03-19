import React from 'react';
import { FaRegCopy } from 'react-icons/fa';
import '../../../layouts/Parte1.css';

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
        <h1>
  Sessão: <span className="gradient-text2">Automação Front-End</span>
</h1>

        <p><span className="subtitulo-parte1">Automação de testes front-end é a prática de escrever scripts que simulam interações de um usuário em um navegador.<br></br>
        Esses testes garantem que a interface gráfica de um sistema funcione conforme o esperado.</span></p>
        <br></br>
        <h2>Ferramentas Necessárias:</h2>
        <br></br>
        <ul>
  <li>
    <h3>
      <strong>Java:</strong> Linguagem de programação usada para o desenvolvimento do projeto.
    </h3>
  </li>
  <li>
    <h3>
      <strong>Selenium WebDriver:</strong> Biblioteca que permite automação de interações com navegadores.
    </h3>
  </li>
  <li>
    <h3>
      <strong>Maven:</strong> Gerenciador de dependências e automação de build.
    </h3>
  </li>
  <li>
    <h3>
      <strong>IDE (Eclipse, IntelliJ IDEA ou VS Code):</strong> Ambiente para desenvolvimento.
    </h3>
  </li>
  <li>
    <h3>
      <strong>ChromeDriver:</strong> Necessário para controlar o navegador Google Chrome (ou o driver correspondente ao navegador que você preferir).
    </h3>
  </li>
  <li>
    <h3>
      <strong>Cucumber:</strong> Ferramenta para escrever testes de forma legível, baseada em Gherkin.
    </h3>
  </li>
</ul>
<br></br>

<h2>Configurando o Ambiente -<strong> Iniciando um projeto</strong></h2>
        <br></br>
        <ol>
          <li>Crie um projeto Maven.</li>
          <li>Adicione as dependências do Selenium e Cucumber no <code>pom.xml</code>.</li>
          <li>Baixe a versão correspondente do ChromeDriver e adicione-o ao PATH do sistema.</li>
        </ol>
        <br></br>
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

        <br></br>

        <h2>Estruturação de Pastas no Projeto</h2>
        <p>Utilize a seguinte estrutura para organização de pastas no seu projeto:</p>
        <br></br>
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
│   │           └── runner
│   └── test
│       └── resources
│           └── features
├── pom.xml
└── target`}
        </pre>
        <br></br>
        <ul>
          <li>
          <h3>
      <strong>Page Objects:</strong> Arquitetura que encapsula os elementos e as ações de uma página em classes específicas.
    </h3>
          </li>
          <li>
          <h3>
      <strong>Ações Separadas:</strong> Mantenha ações genéricas (como clicar, preencher campos) centralizadas para facilitar manutenção.
    </h3>
          </li>
        </ul>

        <br></br>

        <h2>Criando o primeiro cenário automatizado</h2>
        <br></br>
        <p>1 - Escreva o Cenário em <strong>Gherkin:</strong></p>
        <p>Crie um arquivo <strong>.feature</strong> em <strong>src/test/resources/features</strong> com cenários no formato Gherkin. Por exemplo:</p>
        <pre>
{`Feature: Login no Sauce Demo

  Scenario: Realizar login com sucesso
    Given que estou na página inicial
    When eu insiro o usuário "standard_user" e senha "secret_sauce"
    And clico no botão de login
    Then devo ser redirecionado para a página de produtos`}
        </pre>
        <br></br>

        <p>2 - Crie a Classe de Execução:</p>
        <p>Configure o <strong>Runner</strong> do <strong>Cucumber:</strong></p>
        <pre>
{
  `import org.junit.runner.RunWith; 
import io.cucumber.junit.Cucumber; 
import io.cucumber.junit.CucumberOptions; 
 
@RunWith(Cucumber.class) 
@CucumberOptions(features = "src/test/resources/features", glue = "br.com.projeto.testes") 
public class RunnerTest { 
} `
}
        </pre>
        <br></br>

        <p>3 - Implemente os Steps:</p>
        <p>No pacote <strong>br.com.projeto.testes</strong>, crie os steps para o cenário:</p>
        <pre>
        {
          `package br.com.projeto.testes;

import br.com.projeto.paginas.LoginPage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.java.en.*;
import org.junit.Assert;

public class LoginSteps {

    private WebDriver driver;
    private LoginPage loginPage;

    @Given("que estou na página inicial")
    public void queEstouNaPaginaInicial() {
        driver = new ChromeDriver();
        driver.get("https://www.saucedemo.com");
        loginPage = new LoginPage(driver); // Inicializando o Page Object
    }

    @When("eu insiro o usuário {string} e senha {string}")
    public void euInsiroOUsuarioESenha(String usuario, String senha) {
        loginPage.preencherUsuario(usuario); // Usando métodos do Page Object
        loginPage.preencherSenha(senha);
    }

    @And("clico no botão de login")
    public void clicoNoBotaoDeLogin() {
        loginPage.clicarLogin(); // Usando método do Page Object
    }

    @Then("devo ser redirecionado para a página de produtos")
    public void devoSerRedirecionadoParaAPaginaDeProdutos() {
        String urlAtual = driver.getCurrentUrl();
        Assert.assertTrue(urlAtual.contains("inventory.html"));
        driver.quit();
    }
} `
        }
        </pre>
        <br></br>

        <p>4 - Criando um <strong>Page Object</strong></p>
        <p>No pacote <strong>br.com.projeto.paginas</strong>, crie uma classe chamada <strong>LoginPage.java</strong>. Essa classe representará a página de login do Sauce Demo.</p>
        <br></br>

        <pre>
          {
            `package br.com.projeto.paginas;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage {

    private WebDriver driver;

    // Localizadores dos elementos
    private By usernameField = By.id("user-name");
    private By passwordField = By.id("password");
    private By loginButton = By.id("login-button");

    // Construtor para inicializar o WebDriver
    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }

    // Métodos para interagir com os elementos
    public void preencherUsuario(String usuario) {
        driver.findElement(usernameField).sendKeys(usuario);
    }

    public void preencherSenha(String senha) {
        driver.findElement(passwordField).sendKeys(senha);
    }

    public void clicarLogin() {
        driver.findElement(loginButton).click();
    }
} `
          }
        </pre>
        <br></br>
        <h2>Como Executar o Projeto</h2>
        <br></br>
        <p>Agora que o projeto está configurado, siga os passos abaixo para executá-lo:</p>
        <br></br>
        <ol>
          <li>
            <strong>Atualize as dependências Maven:</strong>
            <ul>
              <li>No IntelliJ IDEA: Clique com o botão direito no projeto e selecione <strong>Maven &gt; Reload Project</strong>.</li>
              <li>No Eclipse: Clique com o botão direito no projeto e selecione <strong>Maven &gt; Update Project</strong>.</li>
            </ul>
          </li>
          <li>
            <strong>Execute o Runner:</strong>
            <ul>
              <li>
                <strong>Via IDE:</strong> Na pasta <strong>src/test/java</strong>, localize a classe <strong>RunnerTest</strong>, clique com o botão direito e escolha <strong>Run 'RunnerTest'</strong>.
              </li>
              <li>
                <strong>Via Maven:</strong> Abra o terminal na raiz do projeto e execute o comando:
                <pre>
                  <code>mvn clean test</code>
                </pre>
              </li>
            </ul>
          </li>
          <li>
            <strong>Verifique os resultados:</strong> Após a execução, os resultados aparecerão no console da IDE ou do terminal. O Maven também gerará relatórios na pasta <strong>target</strong>.
          </li>
        </ol>
      </div>
    );
  },
};

export default Parte1;
