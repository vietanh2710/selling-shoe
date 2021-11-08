import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import Section from "./Components/Section";
import "antd/dist/antd.css";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Section />
      </Router>
    </div>
  );
};

export default App;
