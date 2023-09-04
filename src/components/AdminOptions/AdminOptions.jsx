import React from "react";

function AdminOptions({ item }) {
  return (
    <div>
      <a href={`/${item._id}/edit`}>Edit</a>
      <form action={`/${item._id}/?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE" />
      </form>
    </div>
  );
}

export default AdminOptions;
