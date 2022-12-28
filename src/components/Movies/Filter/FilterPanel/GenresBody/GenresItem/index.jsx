import { useState } from "react";
import { GenresBtn } from "../styles/Genres.styled";

export const GenresItem = ({ genre, onCallback }) => {
  const [selectedBtn, setSelectedBtn] = useState(false);
  const { id, name } = genre;
  const onChangeBtn = () => {
    setSelectedBtn((prev) => !prev);
    onCallback(id);
  };
  return (
    <GenresBtn
      bColor={selectedBtn && "rgba(var(--tmdbLightBlue), 1)"}
      clr={selectedBtn && "#fff"}
      onClick={onChangeBtn}
    >
      {name}
    </GenresBtn>
  );
};
