import React from "react";
import Header from "./Components/Header";
import Section from "./Components/Section";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./Components/Context";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
