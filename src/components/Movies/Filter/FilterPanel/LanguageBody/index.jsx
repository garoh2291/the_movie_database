import React, { useContext, useEffect, useState } from "react";

import { MovieSearchContext } from "../../../../../context";

import { API_KEY } from "../../../../../data";
import { SortWrapper } from "../../SortPanel/SortBody/SortBody.styled";
import { FilterBody } from "../../Filter.styled";

export const LanguageBody = () => {
  const { setSearchQueries } = useContext(MovieSearchContext);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isLanguage, setIsLanguage] = useState([
    {
      iso_639_1: "",
      english_name: "Non Selected",
    },
  ]);

  const [langQuery, setLangQuery] = useState({
    query: isLanguage[0].iso_639_1,
    label: isLanguage[0].english_name,
  });

  useEffect(() => {
    // get languages
    fetch(
      `https://api.themoviedb.org/3/configuration/languages?api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setIsLanguage((prev) => [...prev, ...data]));
  }, []);

  const changeLanguage = (item) => {
    // change language query
    setLangQuery({
      query: item.iso_639_1,
      label: item.english_name,
    });

    setSearchQueries((prev) => [
      ...prev,
      {
        qeuryRoute: "with_original_language",
        queryValue: item.iso_639_1,
      },
    ]);
    setIsLangOpen(false);
  };

  return (
    <FilterBody>
      <h3>Language</h3>
      <SortWrapper layout={!isLangOpen && "none"}>
        <span
          data-id={langQuery.query}
          onClick={() => setIsLangOpen((prev) => !prev)}
        >
          {langQuery.label}
        </span>
        <div>
          {isLanguage.map((item, index) => (
            <span
              data-id={item.iso_639_1}
              key={index}
              onClick={() => changeLanguage(item)}
            >
              {item.english_name}
            </span>
          ))}
        </div>
      </SortWrapper>
    </FilterBody>
  );
};
