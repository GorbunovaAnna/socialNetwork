import React from "react";
import styles from './CreatePost.module.scss';

function CreatePost() {
    return(
        <div className={styles.create}>
          <h2 className={styles.createTitle}>My posts</h2>
          <form action="">
            <input type="text" placeholder ="your news" /> 
            <button>send</button>
          </form>
        </div>
    )
}

export default CreatePost;
