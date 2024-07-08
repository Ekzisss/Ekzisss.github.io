import { FC, HTMLAttributes } from "react";
import colors from "@/colors";
import styled from "styled-components";
import useMousePosition from "@/hooks/useMousePosition";
import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector } from "@/redux/hooks";

const Circle = styled.div`
  height: 30px;
  width: 30px;
  /* background-color: ${colors.accent}; */
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99999999;
  border-radius: 50%;
  backdrop-filter: invert(1) grayscale(1);
  /* -webkit-backdrop-filter: invert(1) grayscale(1); */
  transform: translate(-50%, -50%);

  div {
    /* border-radius: 50%; */
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    /* z-index: -1; */
    border-radius: 50%;
  }
`;

const Circles: FC<propTypes> = () => {
  const mousePosition = useMousePosition();
  const selector = useAppSelector((state) => state.hoverState.value);

  return (
    <Circle style={{ top: mousePosition.y, left: mousePosition.x }}>
      <AnimatePresence mode="wait">
        {selector && (
          <>
            <motion.div
              initial={{ x: "-50%", y: "-50%", scale: 1 }}
              animate={{
                scale: [0.9, 1.05, 0.9],
                x: "-50%",
                y: "-50%",
                transition: { repeat: Infinity, duration: 1 },
              }}
              exit={{ scale: 0.85, transition: { duration: 1 } }}
              style={{ border: "2px solid #2c2c2c" }}
            ></motion.div>
            <motion.div
              initial={{ x: "-50%", y: "-50%", scale: 1 }}
              animate={{
                scale: [1.15, 1.3, 1.15],
                x: "-50%",
                y: "-50%",
                transition: { repeat: Infinity, duration: 1 },
              }}
              exit={{ scale: 0.85, transition: { duration: 1 } }}
              style={{ border: "2px solid #1c1c1c" }}
            ></motion.div>
            <motion.div
              initial={{ x: "-50%", y: "-50%", scale: 1 }}
              animate={{
                scale: [1.4, 1.55, 1.4],
                x: "-50%",
                y: "-50%",
                transition: { repeat: Infinity, duration: 1 },
              }}
              exit={{ scale: 0.85, transition: { duration: 1 } }}
              style={{ border: "2px solid #000000" }}
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </Circle>
  );
};

// #4158D0 0%, #C850C0 46%, #FFCC70

interface propTypes extends HTMLAttributes<HTMLDivElement> {}

export default Circles;
