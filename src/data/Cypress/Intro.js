import React from 'react';
import '../../layouts/Intro.css';

const Intro = {
  id: 'intro',
  title: 'Bem-vindo(a)',
  renderContent: () => (
    <div className="intro-content">
      <p className="intro-title">
        Bem-vindo(a) à apostila de estudos de {' '}
        <span className="gradient-text">Cypress!</span> 
      </p>
        <div className="intro-text">
        <div className="intro-text-test">
          <p>
          Este material foi criado para ajudar você a desenvolver competências em testes automatizados
          com <strong>Cypress</strong>. 
          Ao longo deste curso, você aprenderá os fundamentos e as melhores práticas para escrever testes eficientes e robustos, garantindo qualidade e confiabilidade para aplicações web modernas.
          </p>
          </div>
          <p>
            Durante os módulos, você explorará:
          </p>
          <ul>
            <li>
            Como estruturar testes de forma organizada e reutilizável, utilizando a abordagem <strong>AAA (Arrange-Act-Assert).</strong>
            </li>
            <li>
            Técnicas para trabalhar com comandos nativos do <strong>Cypress</strong>, manipulação de elementos e estratégias avançadas de <strong>automação</strong>.
            </li>
            <li>
            Estratégias para lidar com desafios comuns, como <strong>autenticação</strong>, <strong>mocks</strong> de <strong>API</strong>, execução em múltiplos ambientes e integração com <strong>pipelines</strong> de <strong>CI/CD</strong>.
            </li>
          </ul>
        </div>
    </div>
  ),
};

export default Intro;