import styled from 'styled-components';
import colors from '../../colors';

export const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: ${colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 6rem;
  padding-top: 2rem;

  z-index: 10;
`;

export const SubTitle = styled.h2`
  color: ${colors.primary};
  width: 100%;
  position: relative;
  ${window.innerWidth >= 1024 ? 'font-size: 1.3vw;' : 'font-size: 1.3rem;'}

  color: transparent;
  background-clip: text;
  background-color: #4158d0;
  ${colors.gradient}
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FooterInfo = styled.footer`
  padding-top: 5rem;
  padding-bottom: 0.5rem;
  font-size: 1rem;

  & a {
    text-decoration: none;
  }
`;

export const AnimationTransition = styled.div<{ $color?: string }>`
  position: absolute;
  top: 40%;
  left: 20%;
  width: 10rem;
  aspect-ratio: 1;
  border-radius: 100%;
  background-color: ${colors.primary};
  z-index: 2;
`;

export const Decoration = styled.div`
  position: absolute;
  height: 100vh;
  ${window.innerWidth >= 1024 ? 'width: 25vw;' : 'width: 45vw;'}
  background-color: ${colors.primary2};
  top: 0;
  left: 0;
  transform: skew(-8deg) ${window.innerWidth >= 1024 ? 'translateX(-20%)' : 'translateX(-40%)'};
  z-index: -2;

  & h1 {
    color: ${colors.primary};
    writing-mode: vertical-rl;
    text-orientation: sideways-right;
    rotate: 180deg;
    position: absolute;
    right: -2.2vw;
    font-family: 'Kanit';
    white-space: nowrap;
    font-size: 10vw;
    z-index: -1;
    letter-spacing: -0.2rem;
  }

  &::before {
    content: '';
    position: absolute;
    height: 100vh;
    width: inherit;
    background-color: ${colors.primary3};
    top: 0;
    left: -0.5vw;
    z-index: -1;
  }
`;

export const Title = styled.h1`
  ${window.innerWidth >= 1024 ? 'font-size: 8vw;' : 'font-size: 8rem;'}
  position: relative;
  width: 100%;

  &::before {
    content: 'Ekzis';
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    ${colors.gradientText}
    transform: translate(-52%, -52%);
    z-index: -1;
  }
`;
