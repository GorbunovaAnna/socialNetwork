import React from "react";
import styles from "./Person.module.scss";

function Person() {
    return(
        <div className="person">
            <div className={styles.personImg}>
                <img src="https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg"/>
            </div>
            <div className={styles.personInfo}>
                <img className="main__avatar" src="https://i.pinimg.com/originals/a0/5f/6f/a05f6f20728289fd9f5ec22ce3592271.jpg" alt="ava" />
                <div className={styles.personText}>
                    <p className={styles.personInfoName}>Ivan Ivanov</p>
                    <p className="birthday">Date of Birth: April 4</p>
                    <p className="city">City: Minsk</p>
                    <p className="education">Education: BSU'11</p>
                </div>
            </div>
        </div>    
    )
}

export default Person;
