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

export const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 2rem;
  flex-direction: column;
  margin-top: 5rem;
  gap: 1rem;

  & h1 {
    ${colors.gradientText}
    font-size: 5rem;
  }

  & h2 {
    ${colors.darkGradientText}
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  & section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  & ol {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    gap: 2rem;
    list-style: none;
  }

  & li {
    perspective: 1500px;
  }

  & ul {
    padding-left: 1rem;
    border: 2px solid ${colors.color};
    padding: 1rem;
    list-style: none;
    width: 13rem;
    height: 13rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    transition-duration: 300ms;
    transition-property: transform, box-shadow;
    transition-timing-function: ease-out;
    transform: rotate3d(0);

    /* background: url('src/assets/card.jpg'); */

    &:hover {
      transition-duration: 0ms;
      box-shadow: 0 5px 20px 5px ${colors.color}60;
      background: ${colors.onlyGradient};
    }

    & li {
      pointer-events: none;
    }

    & ul {
      pointer-events: none;
    }
  }

  & h3 {
    margin-bottom: 0.5rem;
    text-align: center;
  }
`;

export const Right = styled.div`
  width: 50%;
`;

export const Circle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: ${colors.color};
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  transform: translate(50%, -50%);
`;

export const Circle2 = styled(Circle)`
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  background: ${colors.background};
  width: 80%;
`;

export const Circle3 = styled(Circle2)`
  background: ${colors.color};
  width: 95%;
`;

export const CurveText = styled.h1`
  position: absolute;
  top: -10%;
  left: 100%;
  font-size: 130px;
  letter-spacing: -1rem;

  /* transform: translate(50%, 50%); */

  & span {
    color: ${colors.accent};
  }
`;

export const SvgText = styled.svg`
  position: absolute;
  font-size: 4rem;
  rotate: 30deg;
  top: 40%;
  left: 40%;
`;
