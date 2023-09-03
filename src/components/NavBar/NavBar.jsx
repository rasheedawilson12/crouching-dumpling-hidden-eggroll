import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import styles from "./NavBar.module.css"

function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <nav className={styles.NavBar}>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp; <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}

export default NavBar;
