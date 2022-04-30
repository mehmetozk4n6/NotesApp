import { useState } from "react";

import { useDispatch } from "react-redux";
import { changeSearcher } from "../redux/notes/notesSlice";

function Search() {
  const [searcher, setSearcher] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearcher(e.target.value);
    dispatch(changeSearcher(searcher));
  };

  return (
    <div>
      <input
        className="search"
        onChange={(e) => handleChange(e)}
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;
