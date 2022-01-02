import React from 'react';
import { FilterContainer, FilterText, FilterTagsContainer } from './FilterStyles';
import { allTags } from '../../../constants/constants';
import FilterButton from './FilterButton/FilterButton';

const Filter = props => {
    return (
        <FilterContainer>
            <FilterText>
                Use the following tags to filter out the projects!
            </FilterText>
            <FilterTagsContainer>
                {[...allTags].map((tag, index) => (
                    <FilterButton key={index} tag={tag} />
                ))}
            </FilterTagsContainer>
        </FilterContainer>
    )
}


export default Filter;
