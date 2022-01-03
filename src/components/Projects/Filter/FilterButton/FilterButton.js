import React, { useState } from 'react'
import { Button } from '../FilterStyles'

const FilterButton = ({tag, addTag, deleteTag}) => {

    const [clicked, setClicked] = useState(false);

    const handleClick = e => {
        e.preventDefault();
        if (clicked) {
            deleteTag(e.target.value);
            setClicked(false);
        } else {
            addTag(e.target.value);
            setClicked(true);
        }
    }

    return (
        <Button 
            active={clicked}
            onClick={e => handleClick(e)}
            value = {tag}
        >{tag}</Button>
    )
}

export default FilterButton
