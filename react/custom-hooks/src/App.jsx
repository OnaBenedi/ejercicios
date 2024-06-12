import { useEffect, useState } from "react";
import "./App.css";
import GithubUsers from "./components/GithubUsers";
import CurrentLocation from "./components/CurrentLocation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import GitHubUserRoute from "./components/GitHubUserRoute";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<CurrentLocation />} />
        <Route path="/users" element={<GithubUsers />} />
        <Route path="/users/:username" element={<GitHubUserRoute/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
