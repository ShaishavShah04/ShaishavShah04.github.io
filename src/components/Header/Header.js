import Link from 'next/link';
import React from 'react';
import { AiFillFileText, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#timeline">
          <NavLink>Time Line</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="http://github.com/ShaishavShah04" title="Github">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/shaishavshah04/" title="LinkedIn">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="./ShaishavShahResume.pdf" title="Resume" target="_blank">
        <AiFillFileText size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
