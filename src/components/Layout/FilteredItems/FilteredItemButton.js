/* Filtered Item Button with X icon component */

import React from 'react';
import classes from './FilteredItemButton.module.css';
import Button from '../../UI/Button';

const FilteredItemButton = (props) => {

    const handleClick = (event) => {
        event.stopPropagation()
        props.onClick(props.id, props.perantKey);
    }

    return (
        <Button className={classes.button}>
            <span>{props.title}</span>
            <i className={classes.icon} onClick={handleClick}>X</i>

        </Button>
    );
};

export default FilteredItemButton;