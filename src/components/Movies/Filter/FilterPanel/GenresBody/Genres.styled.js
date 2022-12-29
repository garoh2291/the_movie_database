import styled from "styled-components";

export const StyledGenres = styled.div`
  width: 100%;
  margin-top: -8px;
  display: flex;
  flex-wrap: wrap;
`;

export const GenresBtn = styled.button`
  border: 1px solid;
  border-radius: 14px;
  padding: 4px 12px;
  font-size: 0.9em;
  margin-right: 6px;
  margin-top: 8px;
  background-color: ${({ bColor }) => bColor || "transparent"};
  cursor: pointer;
  transition: 0.3s;
  color: ${({ clr }) => clr || "#000"};
  border-color: ${({ bColor }) => bColor || "#9e9e9e"};

  &:hover {
    background-color: rgba(var(--tmdbLightBlue), 1);
    color: #fff;
    border-color: rgba(var(--tmdbLightBlue), 1);
  }
`;
