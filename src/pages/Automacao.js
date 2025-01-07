import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../layouts/Botoes.css';

import Intro from '../data/Intro';
import Parte1 from '../data/Parte1';
import Parte1Exercicio1 from '../data/Parte1Exercicio1';

const sections = {
  intro: Intro,
  parte1: Parte1,
  parte1Exercicio1: Parte1Exercicio1,
};

const subSections = {
  parte1: ['parte1Exercicio1'],
};

const Automacao = () => {
  const { sectionId } = useParams();
  const navigate = useNavigate();

  // Inicializa o estado 'expanded' e 'active'
  const [expanded, setExpanded] = useState(sectionId && subSections[sectionId] ? '' : sectionId || 'intro');
  const [active, setActive] = useState(sectionId || 'intro');
  const [currentContent, setCurrentContent] = useState(
    sections[sectionId] || sections['intro']
  );
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Atualiza o conteúdo exibido na área direita
    setAnimate(false);
    const timeout = setTimeout(() => {
      setCurrentContent(sections[sectionId] || sections['intro']);
      setAnimate(true);
    }, 100);

    // Atualiza o botão ativo
    setActive(sectionId || 'intro');

    return () => clearTimeout(timeout);
  }, [sectionId]);

  const handleToggle = (key) => {
    if (subSections[key]) {
      setExpanded((prev) => (prev === key ? '' : key));
      navigate(`/automacao/${key}`);
    } else {
      setExpanded(Object.keys(subSections).find((section) =>
        subSections[section].includes(key)
      ) || '');
      setActive(key);
      navigate(`/automacao/${key}`);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      {/* Sidebar com botões */}
      <div className="automacao-sidebar">
        <div className="automacao-sidebar-header">
          <p>
            Conteúdo de <span className="gradient-text">Automação</span>
          </p>
        </div>
        {Object.keys(sections)
          .filter((key) => !Object.values(subSections).flat().includes(key))
          .map((key) => (
            <React.Fragment key={key}>
              <button
                onClick={() => handleToggle(key)}
                className={`automacao-button ${
                  active === key ? 'active' : ''
                }`}
              >
                {sections[key].title}
              </button>
              {expanded === key && subSections[key] && (
                <div className="subbuttons-container">
                  {subSections[key].map((subKey) => (
                    <button
                      key={subKey}
                      onClick={() => handleToggle(subKey)}
                      className={`automacao-subbutton ${
                        active === subKey ? 'active' : ''
                      }`}
                    >
                      {sections[subKey].title}
                    </button>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
      </div>

      {/* Conteúdo à direita */}
      <div style={{ flex: 1, padding: '2rem', backgroundColor: '' }}>
        <div className={`automacao-content ${animate ? 'show' : ''}`}>
          {currentContent.content ? (
            <div dangerouslySetInnerHTML={{ __html: currentContent.content }} />
          ) : (
            currentContent.renderContent && currentContent.renderContent()
          )}
        </div>
      </div>
    </div>
  );
};

export default Automacao;
