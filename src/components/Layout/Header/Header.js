import React from 'react';
import logoImage from '../../../assets/logo.jpg'
import classes from './Header.module.css';

const Header = (props) => {

    return (<React.Fragment>
        <header className={classes.header}>
            <div className={classes['main-image']}>
                <img src={logoImage} alt={'image'} />
            </div>
            <h1>Smart Picker for your Room</h1>
        </header>

    </React.Fragment>);

}

export default Header;