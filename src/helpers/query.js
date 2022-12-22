import { API_KEY } from "../data";

export const QUERY_ARR = [
  {
    qeuryRoute: "language",
    queryValue: "en-US",
  },
  {
    qeuryRoute: "api_key",
    queryValue: API_KEY,
  },
  {
    qeuryRoute: "language",
    queryValue: "en-US",
  },
  {
    qeuryRoute: "sort_by",
    queryValue: "popularity.desc",
  },
  {
    qeuryRoute: "include_adult",
    queryValue: "false",
  },
];

export const generateQuery = (_searchSortQuery) => {
  let query = "";
  _searchSortQuery.forEach((item) => {
    if (item.queryValue !== "") {
      return (query += `${item.qeuryRoute}=${item.queryValue}&`);
    }
  });
  return query;
};
