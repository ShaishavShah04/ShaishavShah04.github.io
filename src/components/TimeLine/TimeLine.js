import React, { useState, useRef, useEffect } from 'react';

import { CarouselContainer, CarouselItem, CarouselItemText, CarouselItemTitle, RightSideBox, LeftSideBox, TheOtherTitle, TheOtherSubTitle, TheOtherText, List } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';


const Timeline = () => {

  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>Time Line</SectionTitle>
      <SectionText>I started to learn programming about 2 years ago, and I've been learning ever since!</SectionText>
      <CarouselContainer>
        <>
          {TimeLineData.map((item, index)=>(
            <CarouselItem key={index}>
              <RightSideBox>
                <CarouselItemTitle>{item.year}</CarouselItemTitle>
                <img src="./media/line.svg" />
              </RightSideBox>
              <LeftSideBox>
                <TheOtherTitle bold >{item.text}</TheOtherTitle>
                <TheOtherSubTitle >{item.subtitle}</TheOtherSubTitle>
                <List>
                  {item.details.map((detail, i)=>(
                    <TheOtherText key={i}>{detail}</TheOtherText>
                  ))}
                </List>
              </LeftSideBox>
            </CarouselItem>
          ))}
        </>
      </CarouselContainer>

    </Section>
  );
};

export default Timeline;
