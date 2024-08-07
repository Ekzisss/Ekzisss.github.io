import { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import colors from "@/colors";
import { projTypes } from "@/features/dbGet";
import { useAppDispatch } from "@/redux/hooks";
import { setFalse, setTrue } from "@/redux/hoverState";
// import img1 from '@/assets/0.webp';
// import img2 from '@/assets/1.webp';

const Left = styled.div`
  display: flex;
  ${window.innerWidth < 690
    ? `flex-direction: column;`
    : "width: 50%;height: calc(100vh - 2rem);"}
  padding-left: 1rem;
  flex-direction: column;
  gap: 2rem;

  border-left: 2px ${colors.primary} solid;
  ${window.innerWidth < 1024 ? "font-size: 1rem;" : "font-size: 1vw;"}
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  ${window.innerWidth < 690
    ? `flex-direction: column;`
    : "width: 50%;height: 100vh;"}
  padding-top: 4rem;
  gap: 0.3rem;
  align-items: center;
  ${window.innerWidth < 1420 ? `flex-grow: 1;` : ""}

  & img {
    width: 100%;
    margin-bottom: 1rem;

    object-fit: contain;

    border-radius: 1rem;
  }

  & a {
    text-align: center;

    ${colors.gradientText};
    ${window.innerWidth < 1024 ? "font-size: 1rem;" : "font-size: 1vw;"}

    &:hover {
      text-decoration: underline;
      color: ${colors.accent};
    }
  }
`;

const Title = styled.h2`
  ${window.innerWidth < 1024 ? "font-size: 4rem;" : "font-size: 4vw;"}
`;

// const images = [img1, img2];

const ProjDisplay: FC<propTypes> = ({ project }) => {
  const dispatch = useAppDispatch();
  const image = new URL(`/src/assets/${project.number}.webp`, import.meta.url)
    .href;
  return (
    <>
      <Left>
        <div>
          <Title>{project.name}</Title>
        </div>
        <section>
          <p>{project.description}</p>
        </section>
        <section>
          <h2>Features</h2>
          {project.features.map((item, index) => (
            <p key={index}>- {item}</p>
          ))}
        </section>
        <section>
          <h2>Stack</h2>
          {project.stack.map((item, index) => (
            <p key={index}>- {item}</p>
          ))}
        </section>
      </Left>
      <Right>
        <a
          onMouseLeave={() => dispatch(setFalse())}
          onMouseEnter={() => dispatch(setTrue())}
          href={project.link}
        >
          <img src={image} alt="" />
        </a>
        <a
          onMouseLeave={() => dispatch(setFalse())}
          onMouseEnter={() => dispatch(setTrue())}
          href={project.link}
        >
          Website
        </a>
        <a
          onMouseLeave={() => dispatch(setFalse())}
          onMouseEnter={() => dispatch(setTrue())}
          href={project.github}
        >
          Github
        </a>
      </Right>
    </>
  );
};

interface propTypes extends HTMLAttributes<HTMLDivElement> {
  project: projTypes;
}

export default ProjDisplay;
