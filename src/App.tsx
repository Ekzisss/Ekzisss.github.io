import { useEffect, useState } from "react";
import "./global.css";
import { AnimatePresence } from "framer-motion";

import Main from "./sections/main/main";
import Persona from "./sections/persona/persona";
import Contact from "./sections/contact/contact";
import Projects from "./sections/projects";

import { Sections } from "./config/enums";
import { useAppSelector } from "./redux/hooks";
import styled from "styled-components";
import colors from "./colors";
import Admin from "./sections/admin";
import Circles from "./components/circle";

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${colors.primary};
  cursor: none;
`;

let initial = false;

function App() {
  const sectionState = useAppSelector((state) => state.sectionState.value);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const admin = new URLSearchParams(window.location.search).get("admin");

  useEffect(() => {
    setTimeout(() => (initial = true), 1000);
  }, []);

  if (admin === import.meta.env.VITE_ADMIN_KEY) return <Admin />;

  return (
    <Wrapper>
      <AnimatePresence mode="wait">
        {sectionState === Sections.main ? <Main initial={initial}></Main> : ""}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {sectionState === Sections.projects ? <Projects></Projects> : ""}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {sectionState === Sections.persona ? <Persona></Persona> : ""}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {sectionState === Sections.contact ? (
          <Contact submitted={submitted} setSubmitted={setSubmitted}></Contact>
        ) : (
          ""
        )}
      </AnimatePresence>

      <Circles />

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
