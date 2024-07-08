import styled from "styled-components";
import { FC, HTMLAttributes, useRef } from "react";
import colors from "@/colors";
import useMousePosition from "@/hooks/useMousePosition";

export const Title = styled.h1<{ $mousePos?: { x: number; y: number } }>`
  ${window.innerWidth >= 1024 ? "font-size: 8vw;" : "font-size: 8rem;"}
  position: relative;
  width: 100%;

  span {
    content: "Ekzis";
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    ${colors.gradientText}
    z-index: -1;
  }
`;

const objPos = { x: 0, y: 0 };

const MovingTitle: FC<propTypes> = () => {
  const mousePosition = useMousePosition();
  const ref = useRef<null | HTMLHeadingElement>(null);
  if (ref.current) {
    objPos.x = ref.current.offsetLeft + ref.current.clientWidth / 2;
    objPos.y = ref.current.offsetTop + ref.current.clientHeight / 2;
  }

  return (
    <Title ref={ref}>
      Ekzis{" "}
      <span
        style={{
          transform: `translate(${mousePosition.x ? -50 - Math.max(Math.min((mousePosition.x - objPos.x) / (window.innerWidth / 10), 3), -3) : -52}%, 
                                ${mousePosition.y ? -50 - Math.min((mousePosition.y - objPos.y) / (window.innerHeight / 20), 7) : -52}%)`,
        }}
      >
        Ekzis
      </span>
    </Title>
  );
};

interface propTypes extends HTMLAttributes<HTMLDivElement> {}

export default MovingTitle;
