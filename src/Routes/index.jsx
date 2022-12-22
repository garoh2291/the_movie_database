import { Navigate, Route, Routes } from "react-router-dom";
import { MoviePage } from "../Pages/MoviePage";
export const RouteComponent = () => {
  return (
    <Routes>
      <Route path="" element={<MoviePage />} />
      <Route path="*" element={<Navigate to={""} />} />
    </Routes>
  );
};
