import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const Dialogs =(Props)=>{
    return(
        <div className={classes.dialogs}>
                <div className={classes.dialogsItem}>
                    <div className={classes.dialog +' '+classes.activ}><NavLink to="/Dialogs/1">Dmitryy Gribkov</NavLink></div>
                    <div className={classes.dialog}><NavLink to="/Dialogs/2">Mikhail Lunegov</NavLink></div>
                    <div className={classes.dialog}><NavLink to="/Dialogs/3">Katerina Kernasova</NavLink></div>
                    <div className={classes.dialog}><NavLink to="/Dialogs/4">Diana Mehanoshina</NavLink></div>
                    <div className={classes.dialog}><NavLink to="/Dialogs/5">Anastasia Kozlova</NavLink></div>
                    <div className={classes.dialog}><NavLink to="/Dialogs/6">Oleg Kozlov</NavLink></div>
                    <div className={classes.dialog}><NavLink to="/Dialogs/7">Dmitryy Mehanoshin</NavLink></div>
                    <div className={classes.dialog}><NavLink to="/Dialogs/8">Irina Lunegova</NavLink></div>
                </div>

            <div className={classes.messages}>
                <div className={classes.message}>Hello</div>
                <div className={classes.message}>Hi my friend!!!</div>
                <div className={classes.message}>Good site</div>
                <div className={classes.message}>How are you</div>
                <div className={classes.message}>Wow!? super!!</div>
            </div>
        </div>
    );
};

export default Dialogs;