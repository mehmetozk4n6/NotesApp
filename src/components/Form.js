import { useState } from "react";

const colors = ["hotpink", "darkviolet", "gold", "aqua", "chartreuse"];

function Form() {
  const [note, setNote] = useState("");
  const [color, setColor] = useState("");

  const handleColorClick = (color1) => {
    setColor(color1);
  };

  return (
    <form className="Form">
      <textarea
        placeholder="Enter your note here..."
        className="textarea"
        rows="10"
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      <div id="footer">
        <div id="colorPicker">
          {colors.map((color1, index) => (
            <figure
              key={index}
              className="circle"
              style={{ backgroundColor: color1 }}
              onClick={() => handleColorClick(color1)}
            >
              {color === color1 ? "✓" : ""}
            </figure>
          ))}
        </div>
        <button className="btn">ADD</button>
      </div>
    </form>
  );
}

export default Form;
