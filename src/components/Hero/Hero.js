import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding fullHeight>
    <LeftSection>
      <SectionTitle main center>
        Hey!
        <br />
        I'm Shaishav Shah.
      </SectionTitle>
      <SectionText>
       I like to work on complex problems that save time in the tasks around us!
      </SectionText>
        
      <a href="./ShaishavShahResume.pdf" target="_blank">
        <Button>Resume</Button>
      </a>

    </LeftSection>
  </Section>
);

export default Hero;