import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronRight, FaCheck, FaTimes } from 'react-icons/fa'; // Adiciona ícones
import '../layouts/Botoes.css';

import Intro from '../data/Cruds/Intro';
//import Crud from '../data/Cruds/AntigoCrudPessoa/Crud';
//import CorrecaoCrud from '../data/Cruds/AntigoCrudPessoa/CorrecaoCrud';
import DesafioCrudPessoa from '../data/Cruds/CrudPessoa/DesafioCrudPessoa';
import CorrecaoCrudPessoa from '../data/Cruds/CrudPessoa/CorrecaoCrudPessoa';
import DesafioCrudVeiculo from '../data/Cruds/CrudVeiculo/DesafioCrudVeiculo';
import CorrecaoCrudVeiculo from '../data/Cruds/CrudVeiculo/CorrecaoCrudVeiculo';

const sections = {
  intro: Intro,
  //crud: Crud,
  //correcaoCrud: CorrecaoCrud,
  desafioCrudPessoa: DesafioCrudPessoa,
  correcaoCrudPessoa: CorrecaoCrudPessoa,
  desafioCrudVeiculo: DesafioCrudVeiculo,
  correcaoCrudVeiculo: CorrecaoCrudVeiculo
};

const subSections = {
  //crud: ['correcaoCrud'],
  desafioCrudPessoa: ['correcaoCrudPessoa'],
  desafioCrudVeiculo: ['correcaoCrudVeiculo']
};

const CrudsPage = () => {
  const { sectionId } = useParams();
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(
    sectionId && subSections[sectionId] ? '' : sectionId || 'intro'
  );
  const [active, setActive] = useState(sectionId || 'intro');
  const [currentContent, setCurrentContent] = useState(
    sections[sectionId] || sections['intro']
  );
  const [animate, setAnimate] = useState(false);
  const [exerciseResults, setExerciseResults] = useState({}); // Armazena os resultados por exercício

  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => {
      setCurrentContent(sections[sectionId] || sections['intro']);
      setAnimate(true);
    }, 100);

    setActive(sectionId || 'intro');

    return () => clearTimeout(timeout);
  }, [sectionId]);

  const handleToggle = (key) => {
    if (subSections[key]) {
      setExpanded((prev) => (prev === key ? '' : key));
      navigate(`/crudspage/${key}`);
    } else {
      setExpanded(
        Object.keys(subSections).find((section) =>
          subSections[section].includes(key)
        ) || ''
      );
      setActive(key);
      navigate(`/crudspage/${key}`);
    }
  };

  // Atualiza o resultado de um exercício
  const updateExerciseResult = (exerciseKey, result) => {
    setExerciseResults((prev) => ({
      ...prev,
      [exerciseKey]: result,
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <div className="automacao-sidebar">
        <div className="automacao-sidebar-header">
          <p>
            Desafios de <span className="gradient-text">Crud</span>
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
                {subSections[key] && (
                  <span style={{ float: 'right' }}>
                    {expanded === key ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                )}
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
                      {exerciseResults[subKey] === 'correto' && (
                        <FaCheck
                        style={{
                          color: '#7CFC00',
                          fontSize: '1.5rem', // Aumenta o tamanho do ícone
                          position: 'absolute',
                          right: '15px', // Alinha à direita
                          top: '50%', // Centraliza verticalmente
                          transform: 'translateY(-50%)', // Ajusta a posição vertical para centralização
                        }}
                      />
                      )}
                      {exerciseResults[subKey] === 'incorreto' && (
                        <FaTimes
                        style={{
                          color: '#DC143C',
                          fontSize: '1.5rem', // Aumenta o tamanho do ícone
                          position: 'absolute',
                          right: '15px', // Alinha à direita
                          top: '50%', // Centraliza verticalmente
                          transform: 'translateY(-50%)', // Ajusta a posição vertical para centralização
                        }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
      </div>
      <div style={{ flex: 1, padding: '2rem', backgroundColor: '' }}>
        <div className={`automacao-content ${animate ? 'show' : ''}`}>
          {currentContent.content ? (
            <div dangerouslySetInnerHTML={{ __html: currentContent.content }} />
          ) : (
            currentContent.renderContent &&
            currentContent.renderContent({ updateExerciseResult }) // Passa a função para o componente de exercício
          )}
        </div>
      </div>
    </div>
  );
};

export default CrudsPage;
