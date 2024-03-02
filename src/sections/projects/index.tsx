import React from 'react';
import styled from 'styled-components';
import colors from '../../colors';
import Project from '@/components/projects';
import { dbGet, projTypes } from '@/features/dbGet';
import ProjDisplay from '@/components/projDisplay';
import { BackButton } from '@/styles';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { change } from '@/redux/sectionState';

import { Main, ProjectsCarousel, Presentation } from './styledComp';
import { motion } from 'framer-motion';
import { Sections } from '@/config/enums';

export default function Projects() {
  const [projects, setProjects] = React.useState<projTypes[]>([]);
  const [currentProj, setCurrentProj] = React.useState<number>(0);
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
      <ProjectsCarousel>
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
      <Presentation>{projects[currentProj] ? <ProjDisplay project={projects[currentProj]}></ProjDisplay> : ''}</Presentation>
      <BackButton onClick={() => dispatch(change(0))}></BackButton>
    </Main>
  );
}