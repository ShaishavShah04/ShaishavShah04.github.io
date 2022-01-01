import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  max-height: 250px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 25px;
  transition: height 2s;
`;

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  padding: 20px;
  transition-property: height;
  transition-duration: 4s;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  &:hover img {
    max-height: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  background: -webkit-linear-gradient(0deg,#cc99ff, #5cd6d6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 24px;
  padding: 15px 0;
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;

export const TagList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  justify-content: flex-start;
`;

export const Tag = styled.div`
  border-radius: 5px;
  color: #d8bfbf;
  padding: 3px 15px;
  font-size: 1.5rem;
  margin: 5px 5px 0 0;
  background-color: #000000;
`;