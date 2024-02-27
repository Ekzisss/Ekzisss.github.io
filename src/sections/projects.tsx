import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import colors from '../colors';

export default function Projects() {
  const Main = styled(motion.div)`
    position: absolute;
    background-color: ${colors.background};
    width: 100vw;
    height: 100vh;
  `;

  return <Main>Projects</Main>;
}
