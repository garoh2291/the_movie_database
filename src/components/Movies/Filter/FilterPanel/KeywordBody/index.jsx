import { useEffect } from "react";
import { useContext, useState } from "react";

import { MovieSearchContext } from "../../../../../context";

import { API_KEY } from "../../../../../data";

import "./styles.css";

export const KeywordBody = () => {
  const [keywords, setKeyWords] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const { setSearchQueries } = useContext(MovieSearchContext);

  const searchKeys = (e) => {
    //seach for keyword
    const { value } = e.target;

    if (value.trim()) {
      fetch(`https://api.themoviedb.org/3/search/keyword?api_key=${API_KEY}&query=${value}&page=1
`)
        .then((res) => res.json())
        .then((data) => setKeyWords(data.results));
    } else {
      setKeyWords([]);
    }

    setIsVisible(true);
  };

  const onSelectKeys = (item) => {
    // choose keyword
    setIsVisible(false);
    setSelectedKeys((prev) => [...prev, item]);
    setKeyWords([]);
  };

  useEffect(() => {
    //dynamically update keywords query
    const selectedKeysIds = selectedKeys.map((item) => item.id);
    const newArr = Array.from(new Set(selectedKeysIds));
    let keysQuery = "";
    newArr.forEach((query, index) => {
      if (index === 0) {
        keysQuery += `${query}`;
      } else {
        keysQuery += `%7C${query}`;
      }
    });

    if (selectedKeys.length) {
      setSearchQueries((prev) => [
        ...prev,
        {
          qeuryRoute: "with_keywords",
          queryValue: keysQuery,
        },
      ]);
    }
  }, [selectedKeys, setSearchQueries]);

  return (
    <div className="sort-panel-body">
      <h3>Keywords</h3>
      <div className="keyword-body">
        <input type="text" onChange={searchKeys} />
        <div
          className={`sort-select-items ${
            !keywords.length || !isVisible ? "non-visible" : ""
          }`}
        >
          {keywords.map((item, index) => (
            <span
              data-id={item.id}
              key={index}
              onClick={() => onSelectKeys(item)}
            >
              {item.name}
            </span>
          ))}
        </div>
        <div
          className={`selected-keys ${
            !selectedKeys.length ? "non-visible" : ""
          }`}
        >
          {Array.from(selectedKeys).map((item, index) => (
            <span key={item.id}>{item.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
