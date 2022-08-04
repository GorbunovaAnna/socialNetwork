import React from "react";
import styles from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";

function Sidebar() {
  // let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <aside className={styles.sidebar}>
      <ul>
        <li >
          <NavLink  to="/profile" activeClassName={styles.active}>Profile</NavLink>
        </li>

        <li>
          <NavLink to="/messages">Messages</NavLink>
        </li>
        <li>
          <NavLink to="/news">News</NavLink>
        </li>
        <li>
          <NavLink to="/music">Music</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
