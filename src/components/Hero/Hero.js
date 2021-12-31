import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey!
        <br />
        I'm Shaishav Shah.
      </SectionTitle>
      <SectionText>
       Hi! &#128075; I'm an undergraduate Computing Science / Business student at the University of Alberta. I like to design and build applications that save time in the tasks around us!
      </SectionText>
      <Button>
        Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;