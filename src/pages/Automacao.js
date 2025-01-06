import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../layouts/Botoes.css';

import Intro from '../data/Intro';
import Parte1 from '../data/Parte1';
import Parte2 from '../data/Parte2';
import Parte3, { Parte3Content } from '../data/Parte3';
import Parte4 from '../data/Parte4';

const sections = {
  intro: Intro,
  parte1: Parte1,
  parte2: Parte2,
  parte3: Parte3,
  parte4: Parte4,
};

const Automacao = () => {
  const { sectionId } = useParams();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(sectionId || 'intro');

  const handleToggle = (key) => {
    setExpanded((prev) => (prev === key ? '' : key));
    navigate(`/automacao/${key}`);
  };

  const currentSection = sections[expanded] || sections['intro'];

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      {/* Botões à esquerda */}
      <div className="automacao-sidebar">
        <div className="automacao-sidebar-header">
          <p>
            Conteúdo de <span className="gradient-text">Automação</span>
          </p>
        </div>
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            onClick={() => handleToggle(key)}
            className="automacao-button"
            style={{
              backgroundColor: expanded === key ? '#0000004f' : '',
            }}
          >
            {sections[key].title}
          </button>
        ))}
      </div>

      {/* Conteúdo à direita */}
      <div style={{ flex: 1, padding: '2rem', backgroundColor: '' }}>
        {Object.keys(sections).map((key) => (
          <div
            key={key}
            className={`automacao-content-inner ${
              expanded === key ? 'open' : ''
            }`}
          >
            {key === 'parte3' ? (
              <Parte3Content />
            ) : sections[key].content ? (
              <div
                dangerouslySetInnerHTML={{ __html: sections[key].content }}
              />
            ) : (
              sections[key].renderContent && sections[key].renderContent()
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Automacao;
