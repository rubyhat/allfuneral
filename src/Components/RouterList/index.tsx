import { Routes, Route } from "react-router-dom";

import Home from "../Home";
import Market from "../Market";

const RouterList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/market" element={<Market />}></Route>
    </Routes>
  );
};

export default RouterList;
