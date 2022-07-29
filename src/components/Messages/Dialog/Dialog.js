import React from "react";
import styles from "./Dialog.module.scss";
import {NavLink} from 'react-router-dom';

function Dialog(props) {
    return(
      <div className={styles.dialog}>
        <NavLink to={"/dialogues/" + props.id}>{props.name}</NavLink>
      </div>
    )
}

export default Dialog;