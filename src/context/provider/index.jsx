import { useState } from "react";
import { MovieSearchContext, MenuContext } from "..";

export const MovieSearchContextProvider = ({ children }) => {
  const [searchQueries, setSearchQueries] = useState([]);

  return (
    <MovieSearchContext.Provider value={{ searchQueries, setSearchQueries }}>
      {children}
    </MovieSearchContext.Provider>
  );
};

export const MenuContextProvider = ({ children }) => {
  //open or close settings for movie cards
  const [isAdditional, setIsAdditional] = useState("");

  //open or close settings for auth menu
  const [isAuthVisible, setIsAuthVisible] = useState(false);
  const onChangeHandler = () => {
    setIsAuthVisible((prev) => !prev);
  };

  const changeAdditional = (_id) => {
    setIsAdditional(_id);
  };
  return (
    <MenuContext.Provider
      value={{
        isAuthVisible,
        onChangeHandler,
        setIsAuthVisible,
        isAdditional,
        setIsAdditional,
        changeAdditional,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
