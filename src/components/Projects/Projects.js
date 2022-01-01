import React from 'react';

import { GridContainer } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Card from './Card/Card';

const Projects = () => (
  <Section  id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, p_i) => (
        <Card project={p} key={p_i}/>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;