import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
