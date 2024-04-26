import "./App.css";
import { useContext } from "react";
import { themeContext } from "./Context";
import { Routes, Route, Link } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import Home from "./components/Home/Home";
import i18n from "./i18n";
import { useSelector } from "react-redux";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App "
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
      </Routes>
    </div>
  );
}

export default App;
