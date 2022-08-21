/* eslint-disable */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Home";

const routes = [
  {
    path: "/",
    name: "Home",

    element: <Home />,
  },
  {
    path: "/about",
    name: "About",

    element: (() => <h1>About</h1>)(),
  },
  {
    path: "/contact",
    name: "About",

    element: (() => <h1>Contact</h1>)(),
  },
  {
    path: "/faq",
    name: "FAQ",
    element: (() => <h1>FAQ</h1>)(),
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            {routes.map(({ path, element, name }) => (
              <Route path={path} element={element} key={name} />
            ))}
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
