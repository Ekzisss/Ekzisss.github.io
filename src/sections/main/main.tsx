import React from "react";
import NavItem from "../../components/navItem";
import { Sections } from "../../config/enums";

import { change } from "../../redux/sectionState";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { motion } from "framer-motion";
import {
  Wrapper,
  Nav,
  FooterInfo,
  Decoration,
  AnimationTransition,
  SubTitle,
} from "./styledComp";
import MovingTitle from "@/components/movingTitle";
import { setFalse, setTrue } from "@/redux/hoverState";

let delay = true;

export default function Main({ initial }: { initial: boolean }) {
  const dispatch = useAppDispatch();
  const sectionState = useAppSelector((state) => state.sectionState.value);
  const [navItemActive, setNavItemActive] = React.useState([
    true,
    false,
    false,
  ]);

  function activeChange(itemNumber: number) {
    const temp = navItemActive.slice().fill(false);
    dispatch(setTrue());
    temp[itemNumber] = true;
    setNavItemActive(temp);
  }

  React.useEffect(() => {
    setTimeout(() => (delay = false), 1000);
  }, [sectionState]);

  return (
    <Wrapper
      as={motion.div}
      initial={initial ? { clipPath: "circle(0% at 30% 40%)" } : ""}
      transition={{ duration: 1 }}
      animate={initial ? { clipPath: "circle(100% at 30% 40%)" } : ""}
    >
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MovingTitle></MovingTitle>
        <SubTitle>frontend developer</SubTitle>
      </motion.div>
      <Nav>
        <NavItem
          OnCLick={() => (delay ? "" : dispatch(change(Sections.projects)))}
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
        <a
          onMouseLeave={() => dispatch(setFalse())}
          onMouseEnter={() => dispatch(setTrue())}
          href="https://t.me/Ekzissss"
        >
          Telegram
        </a>
        <span>, </span>
        <a
          onMouseLeave={() => dispatch(setFalse())}
          onMouseEnter={() => dispatch(setTrue())}
          href="https://github.com/Ekzisss/Ekzisss.github.io"
        >
          Github
        </a>
      </FooterInfo>
      <AnimationTransition
        initial={{ top: "10%", left: "10%", scale: 0 }}
        transition={{ duration: 0.5 }}
        as={motion.div}
        exit={{ scale: Math.floor(window.innerWidth / 100) + 4 }}
      ></AnimationTransition>
      <Decoration>
        <motion.h1
          animate={{ y: 3000 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          MAIN &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN
          &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN
          &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN
          &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN
          &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN
          &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN
          &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN &nbsp;MAIN
        </motion.h1>
      </Decoration>
    </Wrapper>
  );
}
