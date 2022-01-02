import React from 'react'
import { Button } from '../FilterStyles'

const FilterButton = (props) => {
    return (
        <Button>{props.tag}</Button>
    )
}

export default FilterButton
