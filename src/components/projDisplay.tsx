import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import colors from '@/colors';
import { projTypes } from '@/features/dbGet';
import { SemiMediumTittle } from '@/styles';
import img1 from '@/assets/0.webp';
import img2 from '@/assets/1.webp';

const Left = styled.div`
  display: flex;
  height: calc(100vh - 2rem);
  width: 50%;
  padding-left: 1rem;
  flex-direction: column;
  gap: 2rem;

  border-left: 2px ${colors.primary} solid;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50%;
  padding-top: 4rem;
  gap: 0.3rem;
  align-items: center;

  & img {
    width: 100%;
    margin-bottom: 1rem;

    object-fit: contain;

    border-radius: 1rem;
  }

  & a {
    text-align: center;

    ${colors.gradientText};

    &:hover {
      text-decoration: underline;
      color: ${colors.accent};
    }
  }
`;

const images = [img1, img2];

const ProjDisplay: FC<propTypes> = ({ project }) => {
  // const image = new URL(`/src/assets/${project.number}.webp`, import.meta.url).href;
  // console.log(project.number);
  return (
    <>
      <Left>
        <div>
          <SemiMediumTittle>{project.name}</SemiMediumTittle>
        </div>
        <section>
          <p>{project.description}</p>
        </section>
        <section>
          <h2>Features</h2>
          {project.features.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </section>
        <section>
          <h2>Stack</h2>
          {project.stack.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </section>
      </Left>
      <Right>
        <a href={project.link}>
          <img src={images[project.number]} alt="" />
        </a>
        <a href={project.link}>Website</a>
        <a href={project.github}>Github</a>
      </Right>
    </>
  );
};

interface propTypes extends HTMLAttributes<HTMLDivElement> {
  project: projTypes;
}

export default ProjDisplay;
