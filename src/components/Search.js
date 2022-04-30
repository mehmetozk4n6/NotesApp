import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { changeSearcher } from "../redux/notes/notesSlice";

function Search() {
  const [searcher, setSearcher] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeSearcher(searcher));
  }, [dispatch]);

  return (
    <div>
      <input
        className="search"
        onChange={(e) => setSearcher(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;
