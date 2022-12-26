import { useState } from "react";

import "./styles.css";

export const GenresItem = ({ genre, onCallback }) => {
  const [selectedBtn, setSelectedBtn] = useState(false);
  const { id, name } = genre;
  const onChangeBtn = () => {
    setSelectedBtn((prev) => !prev);
    onCallback(id);
  };
  return (
    <button
      className={`genre-item ${selectedBtn ? "selected-btn" : ""}`}
      onClick={onChangeBtn}
    >
      {name}
    </button>
  );
};
