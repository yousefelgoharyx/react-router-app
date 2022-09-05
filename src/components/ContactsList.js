import React from "react";

const ContactsList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li
          key={item.id}
          className="flex-1 p-4 hover:bg-slate-700 cursor-pointer"
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
