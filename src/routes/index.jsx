import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/homepage" element={<HomePage />} />
    </Routes>
  );
};

export default RoutesMain;
