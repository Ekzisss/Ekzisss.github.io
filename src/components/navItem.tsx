import styled, { keyframes } from "styled-components";
import colors from "../colors";
import { useAppDispatch } from "@/redux/hooks";
import { setFalse } from "@/redux/hoverState";

const rotate = keyframes`
  0% {
    transform: scale(1);
  }

  10% {
    transform: scale(1.1);
  }

  20% {
    transform: scale(1);
  }

  100% {
    transform: scale(1);
  }
`;

const Main = styled.div`
  position: relative;
`;

const StyledLink = styled.a<{ $isActive: boolean; $isOdd: boolean }>`
  cursor: pointer;
  font-family: "Kanit";
  ${window.innerWidth >= 1024 ? "font-size: 2.5vw;" : "font-size: 3rem;"}
  font-weight: 700;
  text-decoration: none;

  color: ${(props) => (props.$isActive ? colors.primary : colors.color)};

  ${(props) =>
    props.$isActive
      ? `color: transparent;
  background-clip: text;
  background-color: #4158d0;
  ${colors.gradient}`
      : ""}

  z-index: 1;
  position: relative;
  display: block;
  transform: rotate(
    ${(props) => (props.$isActive ? (props.$isOdd ? "4deg" : "-4deg") : "")}
  );
  transition: transform linear 0.2s;
`;

const Decorations = styled.div<{ $isOdd: boolean }>`
  opacity: 0;
  position: absolute;
  width: 130%;
  height: 130%;
  top: -10%;
  left: -30%;
  z-index: 0;
  transform: ${(props) =>
    props.$isOdd ? "scale(-1, 1) rotate(4deg) translate(-20%)" : ""};
  transition: all linear 0.1s;

  &.active {
    opacity: 1;
  }
`;

const SvgTriangle = styled.svg<{ $color?: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  rotate: ${(props) => (props.$color ? "4deg" : "")};
  animation: ${rotate} ease 2s infinite;
  animation-delay: 1s;

  & path {
    /* fill: url(#my-cool-gradient); */

    fill: ${(props) => (props.$color ? `url(#my-cool-gradient)` : "#f5f5f5")};
  }

  & + & {
    animation: none;
  }
`;
export default function NavItem({
  text,
  isActive,
  activeChange,
  OnCLick,
  isOdd,
}: {
  text: string;
  isActive: boolean;
  activeChange?: () => void;
  OnCLick: () => void;
  isOdd: boolean;
}) {
  const dispatch = useAppDispatch();

  return (
    <Main onMouseLeave={() => dispatch(setFalse())} onMouseEnter={activeChange}>
      <StyledLink onClick={OnCLick} $isOdd={isOdd} $isActive={isActive}>
        {text}
      </StyledLink>
      <Decorations $isOdd={isOdd} className={isActive ? "active" : ""}>
        <SvgTriangle
          $color={colors.primary}
          id="Слой_1"
          data-name="Слой 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 381.67 101.89"
        >
          <path
            id="Контур_1"
            data-name="Контур 1"
            className="cls-1"
            d="M48,101.89,381.67,54.4,0,0Z"
          />
        </SvgTriangle>
        <SvgTriangle
          id="Слой_1"
          data-name="Слой 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 381.67 101.89"
        >
          <path
            id="Контур_1"
            data-name="Контур 1"
            className="cls-1"
            d="M48,101.89,381.67,54.4,0,0Z"
          />
        </SvgTriangle>
      </Decorations>
    </Main>
  );
}
