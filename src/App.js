import "./App.css";
import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
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

export default App;
