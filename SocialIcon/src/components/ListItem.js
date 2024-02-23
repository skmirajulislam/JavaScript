import React from "react";

const ListItem = ({ name, link, icon, bgColor }) => { // proops 
  return (
    <div
      className="ListItem"
      style={{
        height: 30,
        backgroundColor: bgColor
      }}
    >
      <img src={icon} alt={name} />
      <a href={link}>{name}</a>
      <p>{name}</p>
    </div>
  );
};

export default ListItem;
