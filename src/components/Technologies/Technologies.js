import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { BsPlug } from "react-icons/bs";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies, from back-end to front-end and everything in between!
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <ul>
              <li>React.js</li>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BsPlug size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <ul>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>C / C++</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
