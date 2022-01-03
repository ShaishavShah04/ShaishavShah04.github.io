import React, { useState, useEffect} from 'react';

import { GridContainer } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Card from './Card/Card';
import Filter from './Filter/Filter';

const Projects = () => {

  const [required, setRequired] = useState([]);

  const filteredProjects = projects.filter(p => {
    let result = required.length > 0 ? required.some(tag => p.tech.includes(tag)) : true ; 
    return result;
  });

  return (
    <Section  id="projects">
      
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>

      {/* This is the filtering thingy */}
      <Filter current={required} setCurrent={setRequired}/>

      {/* This is where projects are showing */}
      <GridContainer>
        {filteredProjects.map((p, p_i) => (
          <Card project={p} key={p_i}/>
        ))}
      </GridContainer>
    </Section>
  );

};
export default Projects;