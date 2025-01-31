import React from 'react';
import '../../layouts/Parte1.css';

const Crud = {
  id: 'crud',
  title: 'Desafio Crud',
  renderContent: () => {

    return (
      <div class="parte1-content">
        <h1>
          Desafio <span className="gradient-text2">CRUD Pessoa</span>
        </h1>
        <br></br>
        <p><span className="subtitulo-parte1">Crie um projeto Java usando Spring Boot que implemente um CRUD para as entidades Pessoa e Endereço, que têm um relacionamento de um-para-muitos.<br></br>
        </span></p>
        <br></br>
        <h2>A entidade Pessoa deve ter os seguintes campos: </h2>
        <br></br>
        <ul className="lista-duas-colunas">
  <li><strong>ID</strong> (Único)</li>
  <li><strong>Nome</strong></li>
  <li><strong>CPF</strong> (Único)</li>
  <li><strong>Data de Nascimento</strong></li>
</ul>
<br></br>
    <h2>A entidade Endereço deve ter os seguintes campos:</h2>
        <br></br>
        <ul className="lista-endereco-tres-colunas">
  <li><strong>ID</strong> (Único)</li>
  <li><strong>Rua</strong></li>
  <li><strong>Número</strong></li>
  <li><strong>Bairro</strong></li>
  <li><strong>Cidade</strong></li>
  <li><strong>Estado</strong></li>
  <li><strong>CEP</strong></li>
</ul>
<pre>Os itens com informativo de Único devem conter valores únicos, como pode exeplo o ID do endereço, ele deve ser Único em sua lista de endereços.
 </pre>
<br></br>
<h2>Funcionalidades esperadas:</h2>
        <br></br>
        <ul>
  <li>
    <h3>
      <strong>Listar todas as pessoas e seus respectivos endereços</strong>
    </h3>
  </li>
  <li>
    <h3>
      <strong>Criar uma nova pessoa com um ou mais endereços</strong>
    </h3>
  </li>
  <li>
    <h3>
      <strong>Atualizar os dados de uma pessoa e/ou seu(s) endereço(s)</strong>
    </h3>
  </li>
  <li>
    <h3>
      <strong>Excluir uma pessoa e todos os seus endereços</strong>
    </h3>
  </li>
  <li>
    <h3>
      <strong>Mostrar a Idade da Pessoa</strong>
    </h3>
  </li>
</ul>
<br></br>
<pre>Obs:
<ul>
  <li>
    Lembre-se de implementar validações básicas para os campos obrigatórios e tratamento de exceções.
  </li>
  <li>
    Persistir os dados em banco de dados H2
  </li>
  <li>
    Todas as respostas da API devem ser em JSON 
  </li>
  </ul>
</pre>
<br></br>
<h2>Pontos a serem avaliados:</h2>
        <br></br>
        <ul>
  <li>
    <h3>
      <strong>Qualidade de código, estrutura, arquitetura e organização do projeto</strong>
    </h3>
  </li>
  <li>
    <h3>
      <strong>Boas práticas de programação</strong>
    </h3>
  </li>
  <li>
    <h3>
      <strong>Alcance dos objetivos propostos.</strong>
    </h3>
  </li>
  <li>
    <h3>
      <strong>REST</strong>
    </h3>
  </li>
  <li>
    <h3>
      <strong>Testes</strong>
    </h3>
  </li> 
</ul>
<br></br>
<h1>
          Será um <span className="gradient-text2">diferencial</span>
        </h1>
        <ul>
  <li>
    <h3>
      <strong>Houver testes de integração</strong>
    </h3>
  </li>
  <li>
    <h3>
      <strong>Houver Swagger</strong>
    </h3>
  </li>
  <li>
    <h3>
      <strong>Poder informar qual endereço é o principal da pessoa</strong>
    </h3>
  </li>
  <li>
    <h3>
      <strong>Fizer Paginação ao listar todas as Pessoas </strong>
    </h3>
  </li>
  </ul>
  
      </div>
    );
  },
};

export default Crud;
