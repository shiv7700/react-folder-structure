import { Routes, Route } from "react-router";
import { Home, About } from "../pages";

export const ProjectRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<About />} />
      </Routes>
    </div>
  );
};
