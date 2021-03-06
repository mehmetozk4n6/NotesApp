import { useSelector } from "react-redux";

function NoteList() {
  const items = useSelector((state) => state.notes.items);
  const searcher = useSelector((state) => state.notes.searcher);

  let filteredItems = searcher
    ? items.filter((item) => item.note.includes(searcher))
    : items;

  return (
    <div className="noteList">
      {filteredItems.map((item, index) => (
        <span key={index} style={{ backgroundColor: item.color }}>
          {" "}
          {item.note}
        </span>
      ))}
    </div>
  );
}

export default NoteList;
