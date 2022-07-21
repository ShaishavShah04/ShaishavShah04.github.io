import React from 'react';
import { DiFirebase, DiCode } from 'react-icons/di';
import { BsPlug, BsFillAspectRatioFill, BsFillCloudFill } from "react-icons/bs";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech" fullHeight style={{ marginTop: "20vh"}}>
    <SectionDivider />
    <br />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies, from back-end to front-end and everything in between!
    </SectionText>
    <List>

      
      <ListItem>
        <BsFillAspectRatioFill size="3rem" style={{marginBottom: "20px"}}/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
            <ul>
              <li><ListParagraph>React.js</ListParagraph></li>
              <li><ListParagraph>Vue.js</ListParagraph></li>
              <li><ListParagraph>JavaScript</ListParagraph></li>
              <li><ListParagraph>HTML/CSS</ListParagraph></li>
            </ul>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <BsPlug size="3rem" style={{marginBottom: "20px"}}/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
            <ul>
              <li><ListParagraph>Express.js + Node.js</ListParagraph></li>
              <li><ListParagraph>Java SpringBoot</ListParagraph></li>
              <li><ListParagraph>Python</ListParagraph></li>
              <li><ListParagraph>C / C++</ListParagraph></li>
            </ul>
        </ListContainer>
      </ListItem>


      <ListItem>
        <DiFirebase size="3rem" style={{marginBottom: "20px"}} />
        <ListContainer>
          <ListTitle>Database</ListTitle>
            <ul>
              <li><ListParagraph>SQL</ListParagraph></li>
              <li><ListParagraph>MongoDB</ListParagraph></li>
              <li><ListParagraph>Firestore</ListParagraph></li>
            </ul>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <BsFillCloudFill size="3rem" style={{marginBottom: "20px"}}/>
        <ListContainer>
          <ListTitle>Cloud</ListTitle>
            <ul>
              <li><ListParagraph>EC2</ListParagraph></li>
              <li><ListParagraph>SES / SNS</ListParagraph></li>
              <li><ListParagraph>RDS</ListParagraph></li>
              <li><ListParagraph>S3</ListParagraph></li>
              <li><ListParagraph>Google Cloud + Firebase</ListParagraph></li>
            </ul>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiCode size="3rem" style={{marginBottom: "20px"}}/>
        <ListContainer>
          <ListTitle>Learning</ListTitle>
            <ul>
              <li><ListParagraph>BlockChain</ListParagraph></li>
              <li><ListParagraph>Solidity (Smart Contracts)</ListParagraph></li>
              <li><ListParagraph>ASP.NET (C#)</ListParagraph></li>

            </ul>
        </ListContainer>
      </ListItem>

  
    </List>
  </Section>


);

export default Technologies;
