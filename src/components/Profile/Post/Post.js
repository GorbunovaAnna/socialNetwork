import React from "react";
import styles from "./Post.module.scss";

function Post(props) {
  return (
    <div className={styles.post}>
      <img
        className={styles.postImg}
        src="https://content.freelancehunt.com/cdn-cgi/image/format=auto,width=800,dpr=1/snippet/34ada/e9b03/1167943/23FF6C39-7655-437B-A8A8-00C64163CC37.jpeg"
        alt="ava"
      />
      <div className={styles.postText}>
        <p>{props.message}</p>
      </div>
    </div>
  );
}

export default Post;
