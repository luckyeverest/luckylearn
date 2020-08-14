import React from 'react';
import classes from'./MyPosts.module.css';
import Post from './Post';
const MyPosts =()=>{
    return(
        <div className={classes.myposts}>
            MyPosts
            <div className={classes.form}>
            <textarea className={classes.textarea}></textarea>
            <button className={classes.button}>Add posts</button>
            </div>
            <div>
                <Post masseges='my first post'/>
                <Post masseges='my second post'/>
            </div>
        </div>
    );
    };
export default MyPosts;