import React from "react";

function Edit({ menuItem }) {
  return (
    <div>
      <form action={`/${menuItem._id}?_method=PUT`} method="POST">
        Image: <input type="text" name="color" defaultValue={menuItem.img} />
        <br />
        Name: <input type="text" name="name" defaultValue={menuItem.name} />
        <br />
        Price: <input type="text" name="name" defaultValue={menuItem.price} />
        <input type="submit" value="Submit Changes" />
      </form>
    </div>
  );
}

export default Edit;
