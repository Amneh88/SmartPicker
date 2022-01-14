import React, { useEffect, useState } from 'react';
import classes from './DropDown.module.css';
import Card from '../../UI/Card';
import Button from '../../UI/Button';
import DropDownButton from './DropDownButton'

const DropDown = (props) => {

    const [selectedItems, setSelectedItems] = useState([]); //for selected Items with in one dropDown
    const allSelectedItems = props.allSelectedItems;


    //listen to outter of  dropdown component click
    useEffect(() => {
        window.addEventListener('click', onClose);

        return () => {
            window.removeEventListener('click', onClose);
        };
    });

    const onClose = () => {
        props.onToggle(null);
    }

    const toggle = (event) => {
        const clearItems = []
        setSelectedItems(clearItems);

        props.onToggle(props.title);
    }


    const handleSelection = (item) => {
        if (!selectedItems.some(exist => exist.id === item.id)) {
            setSelectedItems([...selectedItems, item]);
        }
    }

    const handleCancel = () => {
        const clearItems = []
        setSelectedItems(clearItems);
    }

    const handleApply = () => {
        props.onApply(selectedItems, props.title);
    }

    const onDropDownLayOutClick = (event) => {
        event.stopPropagation();
    }

    const numberOfselected = ((allSelectedItems !== null && allSelectedItems[props.title] !== undefined && allSelectedItems[props.title] !== null && allSelectedItems[props.title].length !== 0) ? ' (' + allSelectedItems[props.title].length + ')' : '');

    const title = props.title + numberOfselected;
    const isOpenMenu = (props.openID === props.title)


    const style = (props.styleMobile ? classes.mobileContainer : classes.container);
    const styleLayout = (props.styleMobile ? classes.DropDownLayoutMoblie : classes.DropDownLayout);

    console.log(props.styleMobile);
    return (<div className={style}>
        <DropDownButton styleMobile={props.styleMobile} isOpen={isOpenMenu} title={title} onClick={toggle} />
        {
            isOpenMenu && (
                <div className={styleLayout} onClick={onDropDownLayOutClick}>
                    <ul >
                        {props.items.map(item => (
                            <li key={item.id}>
                                <Button
                                    className={selectedItems.includes(item) ? classes.selectedButton : ''}//style selected Items buttons
                                    type="button"
                                    onClick={() => handleSelection(item)}>
                                    <span>{item.title}</span>
                                </Button>
                            </li>
                        ))}
                    </ul>

                    <footer className={classes.footer}>
                        {selectedItems.length !== 0 && <Button className={classes.button} onClick={() => handleCancel()} >Cancel</Button>}
                        <Button className={classes.button} onClick={() => handleApply()}>Apply</Button>
                    </footer>
                </div>
            )
        }

    </div>);

}

export default DropDown;