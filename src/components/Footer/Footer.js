import React from 'react';
import { AiFillGithub, AiFillFileText, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, MessageContainer, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>

      <MessageContainer>
        <Slogan><LinkItem href="mailto:shaishav.shah04@gmail.com">shaishav.shah04@gmail.com</LinkItem></Slogan>
      </MessageContainer>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Shaishav Shah</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="http://github.com/ShaishavShah04" target="_blank">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/shaishavshah04/" target="_blank">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="./ShaishavShahResume.pdf" target="_blank">
            <AiFillFileText size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
