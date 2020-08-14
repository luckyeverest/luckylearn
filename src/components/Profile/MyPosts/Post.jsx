import React from 'react';
import classes from'./Post.module.css';
const Post =(props)=>{
    return(
        <div className={classes.post}>
            <img  className={classes.foto} src='Mark_Zuckerberg.jpg'/>
            <p>{props.masseges}</p>
            <span className={classes.like}>like</span>
        </div>
    );
    };
export default Post;