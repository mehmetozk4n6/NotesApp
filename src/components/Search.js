import { useDispatch } from "react-redux";
import { changeSearcher } from "../redux/notes/notesSlice";

function Search() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeSearcher(e.target.value));
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
