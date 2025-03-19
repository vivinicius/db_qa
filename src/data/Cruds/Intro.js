import React from 'react';
import '../../layouts/Intro.css';

const Intro = {
  id: 'intro',
  title: 'Bem-vindo(a)',
  renderContent: () => (
    <div className="intro-content">
      <p className="intro-title">
        Bem-vindo(a) aos desafios de {' '}
        <span className="gradient-text">CRUD!</span>
      </p>
      <div className="intro-text">
        <div className="intro-text-test">
          <p>
            Este material foi desenvolvido para desafiar suas habilidades na criação de aplicações
            em <strong>Java</strong>, utilizando conceitos sólidos de <strong>CRUD</strong> e <strong>Spring Boot</strong>.
            Aqui, você terá a oportunidade de aplicar boas práticas de desenvolvimento enquanto implementa sistemas reais e funcionais.
          </p>
        </div>
        <p>
          Durante os desafios, você irá:
        </p>
        <ul>
          <li>
            Construir e aprimorar um CRUD completo para gestão de <strong>Pessoas</strong> e seus <strong>Endereços</strong>, com relacionamentos e validações.
          </li>
          <li>
            Desenvolver um CRUD para gerenciamento de <strong>Veículos</strong>, incluindo requisitos extras como busca por placa e cálculo de depreciação.
          </li>
          <li>
            Explorar conceitos como <strong>RESTful APIs</strong>, integração com banco de dados <strong>H2</strong>, documentação com <strong>Swagger</strong> e testes automatizados.
          </li>
        </ul>
      </div>
    </div>
  ),
};

export default Intro;
