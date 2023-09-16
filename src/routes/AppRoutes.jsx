import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/404";
import Favorite from "../pages/Favorite";
import Read from "../pages/Read";
import Profile from "../pages/Profile";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/read" element={<Read />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes