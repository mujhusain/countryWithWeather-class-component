import "./App.css";
import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";
import { Routes, Route, Navigate } from "react-router-dom";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details/:name" element={<CountryDetails />}></Route>
          <Route path="*" exact element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    );
  }
}