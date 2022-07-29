import React from "react";
import styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
        <div className={styles.headerLogo}></div>
        <h1 className={styles.headerTitle}>social network</h1>
      </header>
    )
}

export default Header;