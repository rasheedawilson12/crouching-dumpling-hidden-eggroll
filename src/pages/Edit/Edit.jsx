import React from "react";

function Edit({ id }) {
  return (
    <div>
      <form action={`edit/${id._id}?_method=PUT`} method="POST">
        Image: <input type="text" name="color" defaultValue={id.img} />
        <br />
        Name: <input type="text" name="name" defaultValue={id.name} />
        <br />
        Price: <input type="text" name="name" defaultValue={id.price} />
        <input type="submit" value="Submit Changes" />
      </form>
    </div>
  );
}

export default Edit;
