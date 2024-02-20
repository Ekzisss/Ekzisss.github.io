import React from 'react';
import './global.css';
import { AnimatePresence } from 'framer-motion';

import Main from './sections/main';
import Persona from './sections/persona';
import Contact from './sections/contact';
import Projects from './sections/projects';

import { Sections } from './config/enums';
import { useAppSelector } from './redux/hooks';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(0deg, rgba(6, 56, 75, 1) 0%, rgba(58, 149, 183, 1) 100%);
  overflow: hidden;
`;

function App() {
  const sectionState = useAppSelector((state) => state.sectionState.value);

  function sectionSelection(param: Sections) {
    console.log(sectionState);
    switch (param) {
      case Sections.main:
        return <Main></Main>;
      case Sections.projects:
        return <Projects></Projects>;
      case Sections.persona:
        return <Persona></Persona>;
      case Sections.contact:
        return <Contact></Contact>;
    }
  }

  function sectionChangeAnimation(param: Sections) {
    return sectionSelection(param);
  }

  return (
    <Wrapper>
      <AnimatePresence>{sectionState === Sections.main ? <Main></Main> : ''}</AnimatePresence>
      <AnimatePresence>{sectionState === Sections.projects ? <Projects></Projects> : ''}</AnimatePresence>
      <AnimatePresence>{sectionState === Sections.persona ? <Persona></Persona> : ''}</AnimatePresence>
      <AnimatePresence>{sectionState === Sections.contact ? <Contact></Contact> : ''}</AnimatePresence>
    </Wrapper>
  );
}

export default App;
