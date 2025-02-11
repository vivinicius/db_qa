import React from 'react';
import '../../layouts/Intro.css';

const Intro = {
  id: 'intro',
  title: 'Bem-vindo(a)',
  renderContent: () => (
    <div className="intro-content">
      <p className="intro-title">
        Bem-vindo(a) à apostila de estudos de {' '}
        <span className="gradient-text">Java!</span> 
      </p>
        <div className="intro-text">
        <div className="intro-text-test">
          <p>
            Este material foi criado para ajudar você a desenvolver competências em
            programação <strong>Java</strong>. 
            Ao longo deste curso, você aprenderá os fundamentos e as melhores práticas para escrever código eficiente e escalável, garantindo qualidade e desempenho para aplicações modernas.
          </p>
          </div>
          <p>
            Durante os módulos, você explorará:
          </p>
          <ul>
            <li>
              Como estruturar código de forma limpa e organizada utilizando os princípios da <strong>Programação Orientada a Objetos</strong>.
            </li>
            <li>
              Técnicas para trabalhar com frameworks populares como <strong>Spring Boot</strong> e ferramentas essenciais como <strong>Maven</strong> e <strong>Gradle</strong>.
            </li>
            <li>
              Estratégias para lidar com desafios comuns no desenvolvimento, como manipulação de <strong>APIs REST</strong>, gerenciamento de <strong>bancos de dados</strong> e otimização de performance.
            </li>
          </ul>
        </div>
    </div>
  ),
};

export default Intro;