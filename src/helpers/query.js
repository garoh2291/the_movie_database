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
  {
    qeuryRoute: "with_watch_monetization_types",
    queryValue: "",
  },
  {
    qeuryRoute: "with_genres",
    queryValue: "",
  },
  {
    qeuryRoute: "vote_count.gte",
    queryValue: 0,
  },
  {
    qeuryRoute: "with_original_language",
    queryValue: "",
  },
  {
    qeuryRoute: "vote_average.gte",
    queryValue: 0,
  },
  {
    qeuryRoute: "vote_average.lte",
    queryValue: 10,
  },
  {
    qeuryRoute: "release_date.lte",
    queryValue: "2023-06-26",
  },
  {
    qeuryRoute: "release_date.gte",
    queryValue: "",
  },
  {
    qeuryRoute: "with_keywords",
    queryValue: "",
  },
  {
    qeuryRoute: "with_runtime.gte",
    queryValue: 0,
  },
  {
    qeuryRoute: "with_runtime.lte",
    queryValue: 400,
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
