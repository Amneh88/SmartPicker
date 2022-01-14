import React, { useEffect, useState } from 'react';
import Button from '../../UI/Button';
import DropDown from './DropDown';
import classes from './Menu.module.css';


const Menu = (props) => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleDropDownButton = () => {
        setToggleMenu(toggleMenu => !toggleMenu)
        console.log(toggleMenu)
    }
    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])


    const toggle = (title) => {
        props.toggle(title);
    }
    const handleApply = (selectedItems, key) => {
        props.handleApply(selectedItems, key);
    }

    const handleCancel = (removedItems, key) => {
        props.handleCancel(removedItems, key);
    }
    //const mobileClassForContainer
    return (<React.Fragment>
        {  (screenWidth > 500) && Object.keys(props.data).map((key) => {
            return <DropDown styleMobile={false} allSelectedItems={props.allSelectedItems} openID={props.openID} key={key} title={key} items={props.data[key]} onToggle={toggle} onApply={handleApply} customClass={""} />
        })}
        <Button onClick={toggleDropDownButton} className={classes.btn}>More Filter</Button>



        {(screenWidth < 500) && Object.keys(props.data).map((key, index) => {
            if (index < 2) {
                return <DropDown styleMobile={false} allSelectedItems={props.allSelectedItems} openID={props.openID} key={key} title={key} items={props.data[key]} onToggle={toggle} onApply={handleApply} />
            }
            else if (toggleMenu && index > 1) {

                return <DropDown styleMobile={true} allSelectedItems={props.allSelectedItems} openID={props.openID} key={key} title={key} items={props.data[key]} onToggle={toggle} onApply={handleApply} />
            }


        })}


    </React.Fragment>);

}

export default Menu;