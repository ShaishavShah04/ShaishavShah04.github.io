import React, { useState } from 'react';
import { FaLink } from "react-icons/fa"
import AnimateHeight from 'react-animate-height';

import { BlogCard, CardInfo, HeaderThree, Hr, Tag, TagList, TitleContent, Img } from '../ProjectsStyles';

const Card = (props) => {
    
    const [isExtended, setExtended] = useState(false);
    const p = props.project;

    return (
        
        <BlogCard onMouseEnter={e => setExtended(true)} onMouseLeave={e => setExtended(false)}>
            
            <Img src={p.img} />
            <TitleContent>
                <HeaderThree>{p.name}</HeaderThree>
            </TitleContent>

            <AnimateHeight height={ isExtended ? "auto" : 0 } duration={500}>
                <Hr />
                {p.description.map( (sentence, i) => <CardInfo key={i}>{sentence}<br/><br/></CardInfo>  )}
                <a href="www.google.com" style={{ color: 'whitesmoke' }}><FaLink /></a>
                <Hr />
            </AnimateHeight>
            <TagList>
                {p.tech.map((item, index) => (
                    <Tag key={index}>{item}</Tag>
                ))}
            </TagList>
        </BlogCard>

    );

};

export default Card;