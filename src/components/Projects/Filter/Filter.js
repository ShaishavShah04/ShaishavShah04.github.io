import React from 'react';
import { FilterContainer, FilterText, FilterTagsContainer, Button } from './FilterStyles';
import { allTags } from '../../../constants/constants';
import FilterButton from './FilterButton/FilterButton';

const Filter = props => {
    
    const addTag = (tag) => {
        props.setCurrent([...props.current, tag]);
    };

    const deleteTag = (tag) => {
        props.setCurrent(props.current.filter( e => e != tag));
    };

    return (
        <FilterContainer>

            <FilterText>
                Hover over projects for info and links!
            </FilterText>
            <FilterText>
                Click the following tags to filter out the projects!
            </FilterText>
            
            <FilterTagsContainer>
                {[...allTags].map((tag, index) => (
                        <FilterButton 
                            tag={tag} 
                            key={index} 
                            addTag={addTag} 
                            deleteTag={deleteTag} 
                        />
                    ))}
            </FilterTagsContainer>
        </FilterContainer>
    )
}


export default Filter;
