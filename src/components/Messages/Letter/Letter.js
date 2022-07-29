import React from "react";
import styles from "./Letter.module.scss";

function Letter(props) {
    return(
      <div className={styles.letter}>{props.text}</div>
    )
}

export default Letter;
  