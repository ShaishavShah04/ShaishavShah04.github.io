
import styled from 'styled-components'

export const CarouselContainer = styled.div`
  max-width: 1040px;
  background: #0F1624;
  padding: 0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* overflow-x: hidden; */
  margin-left: 32px;
  margin-bottom: 80px;
  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 0px;
  }
`

export const CarouselItem = styled.div`
  display: flex;
  flex-direction: row;
  background: #0F1624;
  border-radius: 3px;

  @media ${props => props.theme.breakpoints.md} {
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    background: #0E131F;
    padding: 4px;
    align-content: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;
  }
`

export const RightSideBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-right: 1px solid rgb(105,105,105,0.3);

  @media ${props => props.theme.breakpoints.md} {
    width: 80px;
  }
`;

export const LeftSideBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;

  @media ${props => props.theme.breakpoints.md} {
    padding: 10px;
  }

`;

export const TheOtherTitle = styled.h5`
  font-weight: "bold";
  font-size: 20px;
  letter-spacing: 0.02em;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.9);

  @media ${props => props.theme.breakpoints.md} {
    font-size: 18px;
    margin-bottom: 4px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`

export const TheOtherSubTitle = styled.h6`
  font-weight: 200;
  font-size: 18px;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md} {
    font-size: 16px;
    margin-bottom: 4px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 12px;
  }
`
export const List = styled.ul`
  margin-left: 30px;
`;

export const TheOtherText = styled.li`
  font-weight: 200;
  list-style-type: circle;
  font-size: 16px;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.4);

  @media ${props => props.theme.breakpoints.md} {
    font-size: 14px;
    margin-bottom: 4px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
  }
`

export const CarouselItemTitle = styled.h4`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  flex-direction: column;
  width: 80px;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
    width: 50px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`

export const TheDetails = styled.p`
  color: whitesmoke;
  font-size: 24px;
`;
