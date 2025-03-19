import React from 'react';
import '../../layouts/Intro.css';

const Intro = {
  id: 'intro',
  title: 'Bem-vindo(a)',
  renderContent: () => (
    <div className="intro-content">
      <p className="intro-title">
        Bem-vindo(a) aos desafios de{' '}
        <span className="gradient-text">Automação de Testes!</span>
      </p>
      <div className="intro-text">
        <div className="intro-text-test">
          <p>
            Este material foi desenvolvido para você colocar em prática suas habilidades em
            automação de testes <strong>front-end</strong>, <strong>back-end</strong> e integração de sistemas.
            Aqui, você encontrará uma série de desafios cuidadosamente elaborados para testar e aprimorar suas competências, utilizando ferramentas modernas e cenários reais do mercado.
          </p>
        </div>
        <p>
          Ao longo dos desafios, você enfrentará:
        </p>
        <ul>
          <li>
            Criação de testes automatizados claros e eficazes com <strong>Cypress</strong> e <strong>Selenium</strong>, explorando diferentes níveis de complexidade.
          </li>
          <li>
            Validação e integração de APIs REST, aplicando ferramentas como <strong>Rest-Assured</strong> e <strong>Postman</strong>.
          </li>
          <li>
            Implementação de pipelines CI/CD com <strong>GitLab</strong>, além de boas práticas para manter testes rápidos, estáveis e escaláveis.
          </li>
        </ul>
      </div>
    </div>
  ),
};

export default Intro;
