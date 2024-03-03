// import React from 'react';
import { BackButton } from '@/styles';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { change } from '@/redux/sectionState';
import styled from 'styled-components';
import colors from '@/colors';
import { motion } from 'framer-motion';
import { Sections } from '@/config/enums';

const Main = styled.div`
  position: absolute;
  background-color: ${colors.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 100;
`;

export default function Contact() {
  const dispatch = useAppDispatch();
  const sectionState = useAppSelector((state) => state.sectionState.value);
  return (
    <Main
      as={motion.div}
      initial={{ clipPath: 'circle(0% at 30% 40%)' }}
      transition={{ duration: 0.5, delay: 0.2, x: { duration: 1 } }}
      animate={{ clipPath: 'circle(100% at 30% 40%)' }}
      exit={{ x: 1 }}
      style={{ zIndex: sectionState === Sections.main ? '0' : '100' }}
    >
      <BackButton onClick={() => dispatch(change(0))}></BackButton>
    </Main>
  );
}
