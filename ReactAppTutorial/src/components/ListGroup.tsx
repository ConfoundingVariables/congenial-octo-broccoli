interface ListGroupProps {
  items: string[];
  heading: string;
}

import { useState } from "react";

function ListGroup({ items, heading }: ListGroupProps) {
  const listNotEmpty = () => {
    return items.length === 0 ? <p>No Items Found!!</p> : null;
  };

  //hook
  const [selectedItem, setSelectedItem] = useState(-1);

  const listGen = () => {
    return items.map((item, index) => (
      <li
        className={
          selectedItem === index ? "list-group-item active" : "list-group-item"
        }
        key={item}
        onClick={() => {
          setSelectedItem(index);
        }}
      >
        {item}
      </li>
    ));
  };

  return (
    // <> </> tells react to use Fragment for all the children
    <>
      <h1>{heading}</h1>
      {listNotEmpty()}
      {/* cooler way to do this is 
      {items.length === 0 && <p>No Items Found!!</p>} which is basically true && "output" */}
      <ul className="list-group">{listGen()}</ul>
    </>
  );
}

export default ListGroup;
