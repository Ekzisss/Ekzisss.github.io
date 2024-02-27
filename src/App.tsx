import { useEffect } from 'react';
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

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Circle = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 24px;
  background-color: ${colors.primary};
  position: fixed;
  pointer-events: none;
  z-index: 99999999;
`;

let circles: NodeListOf<any> = [];
const coords = { x: 0, y: 0 };
// const clickAnim = { animate: { top: Math.random() * 200 - 100, left: Math.random() * 200 - 100, opacity: 0 } };

function App() {
  const sectionState = useAppSelector((state) => state.sectionState.value);

  useEffect(() => {
    circles = document.querySelectorAll('#circle');

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + 'px';
        circle.style.top = y - 12 + 'px';

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.5;
        y += (nextCircle.y - y) * 0.5;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }, []);

  function mouseTrailHandler(e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
  }

  function onClickHandler(e) {}

  return (
    <Wrapper onClick={onClickHandler} onMouseMove={mouseTrailHandler}>
      {/* <h1 className=" bg-slate-600">22222222</h1> */}
      <AnimatePresence mode="sync">{sectionState === Sections.projects ? <Projects></Projects> : ''}</AnimatePresence>
      <AnimatePresence mode="sync">{sectionState === Sections.main ? <Main></Main> : ''}</AnimatePresence>
      <AnimatePresence>{sectionState === Sections.persona ? <Persona></Persona> : ''}</AnimatePresence>
      <AnimatePresence>{sectionState === Sections.contact ? <Contact></Contact> : ''}</AnimatePresence>
      <div>
        {/* <Circle as={motion.div} animate="animate" id="circle">
          <Circle transition={{ duration: 1 }} as={motion.div} initial={{ scale: 0.5 }} variants={clickAnim}></Circle>
        </Circle> */}
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
          <stop offset="0%" stop-color="#4158D0" />
          <stop offset="46%" stop-color="#C850C0" />
          <stop offset="100%" stop-color="#FFCC70" />
        </linearGradient>
      </svg>
    </Wrapper>
  );
}

export default App;
