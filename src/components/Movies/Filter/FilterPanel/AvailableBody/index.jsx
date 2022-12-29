import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";

import { MovieSearchContext } from "../../../../../context";
import { AVAILABLE_STREAM } from "../../../../../data";
import { FilterBody } from "../../Filter.styled";

import { StyledCategories, StyledRadioBtn } from "./AvailableSection.styled";

export const AvailableBody = () => {
  const { setSearchQueries } = useContext(MovieSearchContext);
  const [isAll, setIsAll] = useState(true);
  const [searchAvailable, setSearchAvailable] = useState(
    new Set(AVAILABLE_STREAM)
  );

  const changeSearchItems = (item) => {
    setSearchAvailable((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(item)) {
        newSet.delete(item);
      } else {
        newSet.add(item);
      }
      return newSet;
    });
  };

  useEffect(() => {
    // making query for availability categories
    const availableItemsArr = Array.from(searchAvailable);
    let availableQuery = "";
    availableItemsArr.forEach((query, index) => {
      if (index === 0) {
        availableQuery += `${query}`;
      } else {
        availableQuery += `%7C${query}`;
      }
    });

    if (isAll) {
      return;
    } else {
      setSearchQueries((prev) => [
        ...prev,
        {
          qeuryRoute: "with_watch_monetization_types",
          queryValue: availableQuery,
        },
      ]);
    }
  }, [searchAvailable, setSearchQueries, isAll]);

  const changeAvailables = () => {
    //change availability
    setIsAll((prev) => !prev);
    setSearchQueries((prev) => [
      ...prev,
      {
        qeuryRoute: "with_watch_monetization_types",
        queryValue: "",
      },
    ]);
  };

  return (
    <FilterBody>
      <h3>Availabilities</h3>
      <StyledRadioBtn>
        <input
          type="checkbox"
          name="all_availabilities"
          id="all_availabilities"
          defaultChecked={isAll}
          onClick={changeAvailables}
        />
        <label htmlFor="all_availabilities">Search all availabilities?</label>
      </StyledRadioBtn>
      <StyledCategories layout={!isAll && "block"}>
        {AVAILABLE_STREAM.map((item, index) => (
          <StyledRadioBtn key={index}>
            <input
              type="checkbox"
              name={item}
              id={`${item}-id`}
              defaultChecked
              value={item}
              onChange={() => changeSearchItems(item)}
            />
            <label htmlFor={`${item}-id`}>{item}</label>
          </StyledRadioBtn>
        ))}
      </StyledCategories>
    </FilterBody>
  );
};
