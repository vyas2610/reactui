import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Com from "./layout/Com";
import P404Page from "./components/404Page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Com />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/about" element={<Header />}></Route>
          <Route path="/*" element={<P404Page />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
