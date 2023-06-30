import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { MainPage } from "./pages/MainPage";
import { FetParams, getdata } from "./apis/getdb";
import { IndexPage } from "./pages/IndexPage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPage from "./pages/VideoPage";
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div>
        <Routes>
          <Route path="/" element={<IndexPage />}></Route>
          <Route path="/list/:id/:bibleid" element={<MainPage />}></Route>
          <Route path="/vd/" element={<VideoPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
