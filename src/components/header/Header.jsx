import React from 'react';
import classes from'./Header.module.css';
const Header =()=>{
    return(
        <div className={classes.header}>
            <div className={classes.lll}>LOGOTYPE</div>
            <div className={classes.text}>Lucky Learn Language</div>
        </div>
    );
};
export default Header;