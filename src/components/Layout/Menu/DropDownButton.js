/*
This component for dropDown Button like size / color ...
*/

import React from 'react';
import Button from '../../UI/Button';
import classes from './DropDownButton.module.css';

const DropDownButton = (props) => {
    //props.styleMobile
    const handleClick = (event) => {
        event.stopPropagation();
        props.onClick();
    }
    let style = (props.styleMobile ? classes.mobileButton : classes.button);
    let StyleSelected = (props.styleMobile ? classes.mobileButtonSelected : classes.selected);
    console.log(props.styleMobile);
    console.log(props.title);

    return (<Button
        className={props.isOpen ? StyleSelected : style}
        onClick={handleClick}>
        {props.title}
    </Button>);

}

export default DropDownButton;