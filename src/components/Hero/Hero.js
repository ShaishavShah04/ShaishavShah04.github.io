import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding fullHeight>
    <LeftSection>
      <SectionTitle main center>
        Hey! &#128075;
        <br />
        I'm Shaishav Shah.
      </SectionTitle>
      <SectionText>
       I'm an undergraduate Computing Science / Business student at the University of Alberta. I like to design and build applications that save time in the tasks around us!
      </SectionText>
        
      <a href="./ShaishavShahResume.pdf" target="_blank">
        <Button>Resume</Button>
      </a>

    </LeftSection>
  </Section>
);

export default Hero;