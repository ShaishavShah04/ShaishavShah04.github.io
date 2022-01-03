import styled from "styled-components";

export const FilterContainer = styled.div`
    padding: 3rem;
`;

export const FilterText = styled.h5`
    font-size: 20px;
    margin-bottom: 20px;
`;

export const FilterTagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0;
`;

export const Button = styled.button`
    border-radius: 10px;
    padding: 10px;
    margin: 5px 5px 0 0;
    background: ${(props) => props.active ? '-webkit-linear-gradient(0deg,#915ED5, #16ABC7)' : 'grey'};
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
`;