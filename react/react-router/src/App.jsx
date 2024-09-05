import "./App.css";
import GithubUsers from "./components/GithubUsers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import ErrorNotFound from "./components/ErrorNotFound";
import ShowGithubUser from "./components/ShowGithubUser";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/users" element={<GithubUsers />}>
          <Route index element={<p>Add a user and select it</p>}/>
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Route>

        <Route path="*" element={<ErrorNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
