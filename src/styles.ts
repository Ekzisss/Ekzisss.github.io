import styled from 'styled-components';
import colors from './colors';

export const BigTittle = styled.h1`
  font-size: 8rem;
`;

export const MediumTittle = styled.h1`
  font-size: 4rem;
`;

export const SemiMediumTittle = styled.h1`
  font-size: 2.5rem;
`;

export const SmallTittle = styled.h1`
  font-size: 1.5rem;
`;

export const BackButton = styled.div`
  position: absolute;
  top: 0;
  left: -1rem;
  z-index: 2;
  background-color: ${colors.background};
  font-size: 2rem;
  font-weight: 700;
  width: 10rem;
  height: 3rem;
  transform: skew(-10deg);

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.3s all linear;

  &:hover {
    background: ${colors.onlyGradient};

    &::after {
      letter-spacing: 3px;
    }
  }

  &::after {
    transition: 0.1s all linear;
    content: 'Back';
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, -50%);
  }
`;
