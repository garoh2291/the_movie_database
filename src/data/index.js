export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API_KEY = process.env.REACT_APP_API_KEY;
export const IMG_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

export const NAVIGATION_LINKS = {
  movies: {
    label: "Movies",
    list: [
      {
        link: "",
        label: "Popular",
      },
      {
        link: "",
        label: "Now Playing",
      },
      {
        link: "",
        label: "Upcoming",
      },
      {
        link: "",
        label: "Top Rated",
      },
    ],
  },
  shows: {
    label: "TV Shows",
    list: [
      {
        link: "",
        label: "Popular",
      },
      {
        link: "",
        label: "Airing Today",
      },
      {
        link: "",
        label: "On TV",
      },
      {
        link: "",
        label: "Top Rated",
      },
    ],
  },
  people: {
    label: "People",
    list: [
      {
        link: "",
        label: "Popular People",
      },
    ],
  },
  more: {
    label: "More",
    list: [
      {
        link: "",
        label: "Discussions",
      },
      {
        link: "",
        label: "Leaderboard",
      },
      {
        link: "",
        label: "Support",
      },
      {
        link: "",
        label: "API",
      },
    ],
  },
  additional: {
    label: "",
    list: [
      {
        link: "",
        label: "Contribution Bible",
      },
      {
        link: "",
        label: "Apps",
      },
      {
        link: "",
        label: "Discussions",
      },
      {
        link: "",
        label: "Leaderboard",
      },
      {
        link: "",
        label: "API",
      },
      {
        link: "",
        label: "Support",
      },
      {
        link: "",
        label: "About",
      },
      {
        link: "",
        label: "Login",
      },
    ],
  },
};

export const SORT_ITEMS = [
  {
    query: "popularity.desc",
    label: "Popularity Descending",
  },
  {
    query: "popularity.asc",
    label: "Popularity Ascending",
  },
  {
    query: "vote_average.desc",
    label: "Rating Descending",
  },
  {
    query: "vote_average.asc",
    label: "Rating Ascending",
  },
  {
    query: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  {
    query: "primary_release_date.asc",
    label: "Release Date Ascending",
  },
  {
    query: "title.asc",
    label: "Title (A-Z)",
  },
  {
    query: "title.desc",
    label: "Title (Z-A)",
  },
];

export const AVAILABLE_STREAM = ["Stream", "Free", "Ads", "Rent", "Buy"];

export const RELEASE_TYPES = [
  {
    name: "Premiere",
    id: 1,
  },
  {
    name: "Theatrical (limited)",
    id: 2,
  },
  {
    name: "Theatrical",
    id: 3,
  },
  {
    name: "Digital",
    id: 4,
  },
  {
    name: "Physical",
    id: 5,
  },
  {
    name: "TV",
    id: 6,
  },
];
