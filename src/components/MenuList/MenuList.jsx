import styles from "./MenuList.module.css";
import MenuListItem from "../MenuListItem/MenuListItem";
import AdminOptions from "../AdminOptions/AdminOptions";
import { useState } from "react";
import { getUser } from "../../utilities/users-service";

export default function MenuList({ menuItems, handleAddToOrder }) {
  const [user, setUser] = useState(getUser());
  const items = menuItems.map((item) => (
    <>
      <div>
        <MenuListItem
          key={item._id}
          handleAddToOrder={handleAddToOrder}
          menuItem={item}
        />
      </div>
      {user.isAdmin === true ? <AdminOptions item={item} /> : null}
    </>
  ));
  return <main className={styles.MenuList}>{items}</main>;
}
