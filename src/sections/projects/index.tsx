import React from 'react';
import Project from '@/components/projects';
import { dbGet, projTypes } from '@/features/dbGet';
import ProjDisplay from '@/components/projDisplay';
import { BackButton } from '@/styles';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { change } from '@/redux/sectionState';

import { Main, ProjectsCarousel, Presentation, Decoration, EmptySpace, OpenButton } from './styledComp';
import { easeIn, easeOut, motion } from 'framer-motion';
import { Sections } from '@/config/enums';

const variants = {
  panel: (projectsTabOpened: boolean) => ({
    x: projectsTabOpened ? 0 : '-100%',
  }),
};

export default function Projects() {
  const [projects, setProjects] = React.useState<projTypes[]>([]);
  const [currentProj, setCurrentProj] = React.useState<number>(0);
  const [projectsTabOpened, setProjectsTabOpened] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const sectionState = useAppSelector((state) => state.sectionState.value);

  React.useEffect(() => {
    dbGet('projects')
      .then((item) => setProjects(item))
      .catch(console.log);
  }, []);

  console.log(projects);

  return (
    <Main
      as={motion.div}
      initial={{ clipPath: 'circle(0% at 30% 40%)' }}
      transition={{ duration: 0.5, delay: 0.2, x: { duration: 1 } }}
      animate={{ clipPath: 'circle(100% at 30% 40%)' }}
      exit={{ x: 1 }}
      style={{ zIndex: sectionState === Sections.main ? '0' : '100' }}
    >
      <EmptySpace style={{ width: window.innerWidth < 1420 ? '0' : '30rem' }}></EmptySpace>
      <Presentation>{projects[currentProj] ? <ProjDisplay project={projects[currentProj]}></ProjDisplay> : ''}</Presentation>

      <Decoration as={motion.div} animate={{ transform: 'rotate(-10deg) translateX(100px)' }} transition={{ duration: 1 }}>
        <h1>PROJECTS</h1>
      </Decoration>

      <ProjectsCarousel
        as={motion.div}
        custom={projectsTabOpened}
        variants={variants}
        animate="panel"
        $isOpened={projectsTabOpened}
        transition={{ type: easeOut }}
      >
        {projects?.map((item, index) => (
          <Project
            key={Symbol(index).toString()}
            onClick={() => setCurrentProj(index)}
            name={item.name}
            tags={item.tags}
            isActive={index === currentProj}
          ></Project>
        ))}
      </ProjectsCarousel>
      <BackButton onClick={() => dispatch(change(0))}></BackButton>
      {window.innerWidth < 1420 && (
        <OpenButton $isOpened={projectsTabOpened} onClick={() => setProjectsTabOpened(!projectsTabOpened)}></OpenButton>
      )}
    </Main>
  );
}
