import styled from 'styled-components';
import colors from '../colors';

const Main = styled.div`
  position: relative;
`;

const Link = styled.a<{ $isActive: boolean; $isOdd: boolean }>`
  font-family: 'Kanit';
  font-size: 3rem;
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => (props.$isActive ? colors.primary : colors.color)};
  z-index: 1;
  position: relative;
  display: block;
  rotate: ${(props) => (props.$isActive ? (props.$isOdd ? '4deg' : '-4deg') : '')};
  transition: all linear 0.2s;
`;

const Decorations = styled.div<{ $isOdd: boolean }>`
  /* display: none; */
  opacity: 0;
  position: absolute;
  width: 130%;
  height: 130%;
  top: -10%;
  left: -30%;
  z-index: 0;
  transform: ${(props) => (props.$isOdd ? 'scale(-1, 1) rotate(4deg) translate(-20%)' : '')};
  transition: all linear 0.1s;

  &.active {
    /* display: block; */
    opacity: 1;
  }
`;

const SvgTriangle = styled.svg<{ $color?: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  rotate: ${(props) => (props.$color ? '4deg' : '')};

  & path {
    fill: ${(props) => props.$color || '#f5f5f5'};
  }
`;
export default function NavItem({
  text,
  isActive,
  activeChange,
  isOdd,
}: {
  text: string;
  isActive: boolean;
  activeChange?: () => void;
  isOdd: boolean;
}) {
  return (
    <Main onMouseEnter={activeChange}>
      <Link $isOdd={isOdd} $isActive={isActive} href="">
        {text}
      </Link>
      <Decorations $isOdd={isOdd} className={isActive ? 'active' : ''}>
        <SvgTriangle
          $color={colors.primary}
          id="Слой_1"
          data-name="Слой 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 381.67 101.89"
        >
          <path id="Контур_1" data-name="Контур 1" className="cls-1" d="M48,101.89,381.67,54.4,0,0Z" />
        </SvgTriangle>
        <SvgTriangle id="Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 381.67 101.89">
          <path id="Контур_1" data-name="Контур 1" className="cls-1" d="M48,101.89,381.67,54.4,0,0Z" />
        </SvgTriangle>
      </Decorations>
    </Main>
  );
}
