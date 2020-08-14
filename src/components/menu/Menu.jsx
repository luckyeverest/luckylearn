import React from 'react';
import classes from'./Menu.module.css';
import { NavLink } from 'react-router-dom';
const Menu =()=>{
    return(
        <div className={classes.menu}>
        <div className={classes.item}><NavLink to='/Profile' activeClassName={classes.activ}>Profile</NavLink></div>
        <div className={classes.item}><NavLink to='/Dialogs' activeClassName={classes.activ}>Dialogs</NavLink></div>
        <div className={classes.item}><NavLink to='/Gallary' activeClassName={classes.activ}>Gallery</NavLink></div>
        <div className={classes.item}><NavLink to='/New' activeClassName={classes.activ}>New</NavLink></div>
        <div className={classes.item}><NavLink to='/Music' activeClassName={classes.activ}>Music</NavLink></div>
        <div className={classes.item}><NavLink to='/Setting' activeClassName={classes.activ}>Setting</NavLink></div>
        <div className={classes.item}><NavLink to='/Sentence' activeClassName={classes.activ}>Sentence</NavLink></div>
        <div className={classes.item}><NavLink to='/Curriculum' activeClassName={classes.activ}>Curriculum</NavLink></div>
        <div className={classes.item}><NavLink to='/Games' activeClassName={classes.activ}>Games</NavLink></div>
        </div>
    );
    };
    export default Menu;