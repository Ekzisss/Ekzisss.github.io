import colors from '@/colors';
import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

const Main = styled.div<{ $isActive: boolean }>`
  position: relative;
  border-left: none;
  padding: 1rem;
  display: flex;
  gap: 0.3rem;
  flex-direction: column;
  cursor: pointer;
  background-color: ${colors.color};
  width: ${(props) => (props.$isActive ? '90%' : '70%')};
  transition: all 0.2s linear;

  &:hover {
    ${(props) => (props.$isActive ? '' : 'width: 75%;&::before {right: -5%;}')};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: ${(props) => (props.$isActive ? '-4%' : '-5.4%')};
    width: 20%;
    height: 100%;
    background-color: ${colors.color};
    transform: skew(-20deg);
    transition: all 0.2s linear;
  }

  & h2 {
    color: ${colors.background};

    &::selection {
      background-color: ${colors.background};
    }
  }

  & div {
    display: flex;
    gap: 0.4rem;
  }
`;

const Tag = styled.div`
  background-color: ${colors.background};
  border-radius: 0.7rem;
  padding: 0.3rem;
`;

const Project: FC<propTypes> = ({ name, isActive, tags, onClick }) => {
  return (
    <Main $isActive={isActive} onClick={onClick}>
      <h2>{name}</h2>
      <div>
        {tags?.map((item, index) => (
          <Tag key={index}>{item}</Tag>
        ))}
      </div>
    </Main>
  );
};

interface propTypes extends HTMLAttributes<HTMLDivElement> {
  name: string;
  isActive: boolean;
  tags: string[];
}

export default Project;
