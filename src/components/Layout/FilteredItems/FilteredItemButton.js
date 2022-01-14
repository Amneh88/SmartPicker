/* Filtered Item Button with X icon component */

import React from 'react';
import classes from './FilteredItemButton.module.css';
import closeImage from '../../../assets/close.png'
import Button from '../../UI/Button';

const FilteredItemButton = (props) => {

    const handleClick = (event) => {
        event.stopPropagation()
        props.onClick(props.id, props.perantKey);
    }

    return (
        <Button className={classes.button}>
            <span>{props.title}</span>
            <span
                className={classes.image}>
                <img src={closeImage}
                    alt={'image'}
                    onClick={handleClick} />
            </span>
        </Button>
    );
};

export default FilteredItemButton;