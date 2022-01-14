/*
This component for dropDown Button like size / color ...
*/

import React from 'react';
import Button from '../../UI/Button';
import classes from './DropDownButton.module.css';

const DropDownButton = (props) => {

    const handleClick = (event) => {
        event.stopPropagation();
        props.onClick();
    }

    return (<Button
        className={props.isOpen ? classes.selected : classes.button}
        onClick={handleClick}>
        {props.title}
    </Button>);

}

export default DropDownButton;