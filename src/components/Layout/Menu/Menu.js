import React from 'react';
import DropDown from './DropDown';
import classes from './Menu.module.css';


const Menu = (props) => {


    const toggle = (title) => {
        props.toggle(title);
    }
    const handleApply = (selectedItems, key) => {
        props.handleApply(selectedItems, key);
    }

    const handleCancel = (removedItems, key) => {
        props.handleCancel(removedItems, key);
    }

    return (<React.Fragment>
        {Object.keys(props.data).map((key) => {
            return <DropDown allSelectedItems={props.allSelectedItems} openID={props.openID} key={key} title={key} items={props.data[key]} onToggle={toggle} onApply={handleApply} />
        })}

    </React.Fragment>);

}

export default Menu;