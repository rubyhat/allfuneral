import { Routes, Route } from "react-router-dom";
import Page404 from "../../Pages/Page404";

import Home from "../Home";
import Market from "../Market";

const RouterList = () => {
  return (
    <Routes>
      <Route path="*" element={<Page404 />} />
      <Route path="/" element={<Home />}></Route>
      <Route path="/market" element={<Market />}></Route>
    </Routes>
  );
};

export default RouterList;
