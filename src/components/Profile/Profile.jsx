import React from 'react';
import classes from'./Profile.module.css';
import MyPosts from'./MyPosts/MyPosts';

const Profile =()=>{
    return(<div className={classes.profile}>
            <div className={classes.information}>
                <img  className={classes.foto} src='Mark_Zuckerberg.jpg'/>
                <div><p>Information<br/>
                City:Perm<br/>
                Language:Rus<br/>
                Learn language:Eng<br/>
                Bethday:06.11.1992<br/>
                Job:Developer</p>
                </div>
            </div>
        <div className={classes.MyPosts}>
            <MyPosts/>
        </div>
    </div>
    );
    };
export default Profile;