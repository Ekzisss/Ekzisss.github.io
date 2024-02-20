import React from 'react';
import styled from 'styled-components';
import NavItem from '../components/navItem';
import colors from '../colors';
import { Sections } from '../config/enums';

import { change } from '../redux/sectionState';
import { useAppDispatch } from '../redux/hooks';
import { motion, AnimatePresence, easeInOut, easeOut } from 'framer-motion';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(0deg, rgba(6, 56, 75, 1) 0%, rgba(58, 149, 183, 1) 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 6rem;
  padding-top: 2rem;

  transform: translateX(-0%);
  overflow: hidden;
`;

const Title = styled.h1<{ $fontSize?: string }>`
  font-size: ${(props) => props.$fontSize};
`;

const SubTitle = styled(Title)`
  color: ${colors.primary};
  position: relative;

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

const AnimationTransition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 20rem;
  background-color: white;
`;

export default function Main() {
  const dispatch = useAppDispatch();
  const [navItemActive, setNavItemActive] = React.useState([true, false, false]);

  function activeChange(itemNumber: number) {
    const temp = navItemActive.slice().fill(false);
    temp[itemNumber] = true;
    setNavItemActive(temp);
  }

  return (
    <Wrapper transition={{ duration: 0.5 }} as={motion.div}>
      <div>
        <Title as="h2" $fontSize="8rem">
          Ekzis
        </Title>
        <Title as="h2" $fontSize="4rem">
          Almaz Abdulhakov
        </Title>
        <SubTitle as="h3" $fontSize="1.3rem">
          frontend developer
        </SubTitle>
      </div>
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
        <a href="https://github.com/Ekzisss/OceanHeart">Github</a>
      </FooterInfo>
      <AnimationTransition
        transition={{ duration: 2 }}
        initial={{ skew: -10, translateX: '140%' }}
        as={motion.div}
        exit={{ x: -window.screen.width, skew: -10 }}
      ></AnimationTransition>
    </Wrapper>
  );
}
