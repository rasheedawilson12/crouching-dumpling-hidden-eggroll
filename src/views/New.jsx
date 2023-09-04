import React from "react";

function New() {
  return (
    <div>
      <h1>New Item Page</h1>
      {/* NOTE: action will be the route, method will be the HTTP verb */}
      <form action="/item/new" method="POST">
        Img: <input type="text" name="img" />
        <br/>
        Name: <input type="text" name="name" />
        <br />
        Price: <input type="text" name="price" />
        <br />
        <input type="submit" name="" value="Create Item" />
      </form>
    </div>
  );
}

export default New;
