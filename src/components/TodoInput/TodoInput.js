import React from "react";
import "./TodoInput.scss";

const TodoInput = ({ value, onChange, onInsert }) => {
  const hanleKeyPress = e => {
    if (e.key === "Enter") {
      onInsert();
    }
  };
  return (
    <div className="TodoInput">
      <input value={value} onChange={onChange} onKeyPress={hanleKeyPress} />
      <div className="add-button" onClick={onInsert}>
        추가
      </div>
    </div>
  );
};

export default TodoInput;
