//import React, { useState } from "react";
import logo from "./logo.svg";
import { Home } from "./pages";
import "./App.css";
// import { useStateContext } from "./contexts/ContextProvider";
function App() {
  // const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
