import React from "react";

import { useSelector } from "react-redux";

function NoteList() {
  const items = useSelector((state) => state.notes.items);
  return (
    <div className="noteList">
      {items.map((item, index) => (
        <span key={index} style={{ backgroundColor: item.color }}>
          {" "}
          {item.note}
        </span>
      ))}
    </div>
  );
}

export default NoteList;
