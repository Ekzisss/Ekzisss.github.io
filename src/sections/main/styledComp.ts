import styled from 'styled-components';
import colors from '../../colors';
import { SmallTittle } from '@/styles';

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

export const SubTitle = styled(SmallTittle)`
  color: ${colors.primary};
  width: 40%;
  position: relative;

  color: transparent;
  background-clip: text;
  background-color: #4158d0;
  ${colors.gradient}

  &::before {
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 25%;
    background-color: ${colors.primary};
    transform: translate(-50%, 50%);
    border-radius: 100%;
    filter: blur(0.5rem);
  }
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
  width: 30rem;
  background-color: ${colors.primary2};
  top: 0;
  left: 0;
  transform: skew(-8deg) translateX(-20%);
  z-index: -1;

  & h1 {
    color: ${colors.primary};
    writing-mode: vertical-rl;
    text-orientation: sideways-right;
    rotate: 180deg;
    position: absolute;
    right: -9%;
    font-family: 'Kanit';
    white-space: nowrap;
    font-size: 10rem;
    z-index: -1;
    letter-spacing: -0.2rem;
  }

  &::before {
    content: '';
    position: absolute;
    height: 100vh;
    width: 30rem;
    background-color: ${colors.primary3};
    top: 0;
    left: -2%;
    z-index: -1;
  }
`;
