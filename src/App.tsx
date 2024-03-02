import { MouseEvent, useEffect } from 'react';
import './global.css';
import { AnimatePresence } from 'framer-motion';

import Main from './sections/main';
import Persona from './sections/persona';
import Contact from './sections/contact';
import Projects from './sections/projects';

import { Sections } from './config/enums';
import { useAppSelector } from './redux/hooks';
import styled from 'styled-components';
import colors from './colors';
import mouseShit from './features/mouseShit';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${colors.primary};
  cursor: none;
`;

const Circle = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 10px;
  background-color: ${colors.accent};
  /* background: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%); */
  position: fixed;
  pointer-events: none;
  z-index: 99999999;
`;

const circles: Array<HTMLDivElement> = [];
const coords = { x: 0, y: 0 };
// const clickAnim = { animate: { top: Math.random() * 200 - 100, left: Math.random() * 200 - 100, opacity: 0 } };

function App() {
  const sectionState = useAppSelector((state) => state.sectionState.value);

  useEffect(() => {
    mouseShit(circles, coords);
  }, []);

  function mouseTrailHandler(e: MouseEvent<HTMLDivElement>) {
    coords.x = e.clientX;
    coords.y = e.clientY;
  }

  // function onClickHandler(e) {}

  return (
    <Wrapper onMouseMove={mouseTrailHandler}>
      <AnimatePresence mode="sync">{sectionState === Sections.main ? <Main></Main> : ''}</AnimatePresence>
      <AnimatePresence mode="sync">{sectionState === Sections.projects ? <Projects></Projects> : ''}</AnimatePresence>
      <AnimatePresence>{sectionState === Sections.persona ? <Persona></Persona> : ''}</AnimatePresence>
      <AnimatePresence>{sectionState === Sections.contact ? <Contact></Contact> : ''}</AnimatePresence>
      <div>
        <Circle id="circle"></Circle>
        <Circle id="circle"></Circle>
        <Circle id="circle"></Circle>
        <Circle id="circle"></Circle>
        <Circle id="circle"></Circle>
        <Circle id="circle"></Circle>
        <Circle id="circle"></Circle>
        <Circle id="circle"></Circle>
        <Circle id="circle"></Circle>
        <Circle id="circle"></Circle>
        <Circle id="circle"></Circle>
        <Circle id="circle"></Circle>
        <Circle id="circle"></Circle>
        <Circle id="circle"></Circle>
        <Circle id="circle"></Circle>
        <Circle id="circle"></Circle>
      </div>

      <svg aria-hidden="true" focusable="false">
        <linearGradient id="my-cool-gradient" x2="1" y2="1">
          <stop offset="0%" stopColor="#4158D0" />
          <stop offset="46%" stopColor="#C850C0" />
          <stop offset="100%" stopColor="#FFCC70" />
        </linearGradient>
      </svg>
    </Wrapper>
  );
}

export default App;
