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

export const Decoration = styled.div`
  position: absolute;
  height: 15rem;
  width: 200rem;
  background-color: ${colors.primary2};
  bottom: -13%;
  right: 15%;
  transform: rotate(-10deg) translate(-1000px);
  z-index: -1;

  & h1 {
    color: ${colors.primary};
    position: absolute;
    right: -3%;
    font-family: 'Kanit';
    white-space: nowrap;
    font-size: 10rem;
    z-index: -1;
    letter-spacing: -0.2rem;
  }

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${colors.primary3};
    right: 1rem;
    top: 1rem;
    z-index: -1;
  }
`;
