import React from 'react';
import styled from 'styled-components';
import NavItem from '../components/navItem';
import colors from '../colors';
import { Sections } from '../config/enums';

import { change } from '../redux/sectionState';
import { useAppDispatch } from '../redux/hooks';
import { motion } from 'framer-motion';

import { BigTittle, MediumTittle, SmallTittle } from '@/styles';

const Wrapper = styled.div`
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

const SubTitle = styled(SmallTittle)`
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

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FooterInfo = styled.footer`
  padding-top: 5rem;
  padding-bottom: 0.5rem;
  font-size: 1rem;

  & a {
    text-decoration: none;
  }
`;

const AnimationTransition = styled.div<{ $color?: string }>`
  position: absolute;
  top: 40%;
  left: 20%;
  width: 10rem;
  aspect-ratio: 1;
  border-radius: 100%;
  background-color: ${colors.primary};
  z-index: 2;
`;

export default function Main({ initial }: { initial: boolean }) {
  const dispatch = useAppDispatch();
  const [navItemActive, setNavItemActive] = React.useState([true, false, false]);

  function activeChange(itemNumber: number) {
    const temp = navItemActive.slice().fill(false);
    temp[itemNumber] = true;
    setNavItemActive(temp);
  }

  return (
    <Wrapper
      as={motion.div}
      initial={initial ? { clipPath: 'circle(0% at 30% 40%)' } : ''}
      transition={{ duration: 1 }}
      animate={initial ? { clipPath: 'circle(100% at 30% 40%)' } : ''}
    >
      <motion.div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <BigTittle>Ekzis</BigTittle>
        <MediumTittle>Almaz Abdulhakov</MediumTittle>
        <SubTitle>frontend developer</SubTitle>
      </motion.div>
      <Nav>
        <NavItem
          OnCLick={() => dispatch(change(Sections.projects))}
          activeChange={() => activeChange(0)}
          isActive={navItemActive[0]}
          isOdd={0 % 2 !== 0}
          text="PROJECTS"
        />
        <NavItem
          OnCLick={() => dispatch(change(Sections.persona))}
          activeChange={() => activeChange(1)}
          isActive={navItemActive[1]}
          isOdd={1 % 2 !== 0}
          text="PERSONA"
        />
        <NavItem
          OnCLick={() => dispatch(change(Sections.contact))}
          activeChange={() => activeChange(2)}
          isActive={navItemActive[2]}
          isOdd={2 % 2 !== 0}
          text="CONTACT"
        />
      </Nav>
      <FooterInfo>
        <a href="https://t.me/Ekzissss">Telegram</a> <span>, </span>
        <a href="https://github.com/Ekzisss/Ekzisss.github.io">Github</a>
      </FooterInfo>
      <AnimationTransition
        initial={{ top: '10%', left: '10%', scale: 0 }}
        transition={{ duration: 0.5 }}
        as={motion.div}
        exit={{ scale: Math.floor(window.innerWidth / 100) + 4 }}
      ></AnimationTransition>
    </Wrapper>
  );
}
