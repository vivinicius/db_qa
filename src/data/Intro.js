import React from 'react';
import '../layouts/Intro.css';

const Intro = {
  id: 'intro',
  title: 'Bem-vindo(a)',
  renderContent: () => (
    <div className="intro-content">
      <p className="intro-title">
        Bem-vindo(a) à apostila de estudos de{' '}
        <span className="gradient-text">Automação de Testes!</span>
      </p>
      <div className="text-and-image">
        <div className="intro-text">
        <div className="intro-text-test">
          <p>
            Este material foi criado para ajudar você a desenvolver competências em
            automação de testes <strong>front-end</strong> e <strong>back-end</strong>.
            Ao longo deste curso, você aprenderá os fundamentos e as melhores práticas para criar testes eficientes e robustos, que garantem a qualidade e a estabilidade de sistemas modernos.
          </p>
          </div>
          <p>
            Durante os módulos, você explorará:
          </p>
          <ul>
            <li>
              Como criar cenários de testes legíveis e bem-estruturados utilizando a linguagem <strong>Gherkin</strong>.
            </li>
            <li>
              Técnicas para trabalhar com frameworks de automação como <strong>Selenium</strong>, <strong>Cucumber</strong> e ferramentas de integração contínua como <strong>Jenkins</strong> e <strong>GitLab CI/CD</strong>.
            </li>
            <li>
              Estratégias para lidar com desafios comuns na automação, como sincronia de elementos, gestão de dados de teste e execução paralela.
            </li>
          </ul>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/printapostila2.png`}
          alt="Print da Apostila"
          className="intro-image"
        />
      </div>
    </div>
  ),
};

export default Intro;
