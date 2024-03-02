import styled from 'styled-components';
import colors from '@/colors';

export const Main = styled.div`
  position: absolute;
  background-color: ${colors.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 100;
`;

export const ProjectsCarousel = styled.div`
  position: relative;
  width: 30rem;
  height: 100vh;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 4rem;

  &::before {
    content: '';
    position: absolute;
    transform: skew(-4deg);
    background-color: ${colors.primary};
    height: 100vh;
    width: 90%;
    top: 0;
    left: -2rem;
    z-index: -1;
  }
`;

export const Presentation = styled.div`
  position: relative;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  max-width: calc(100% - 30rem);
`;
