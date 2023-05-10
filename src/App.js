import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "./App.css";
import Homepage from "./pages/Homepage";
import BankStatements from "./pages/BankStatements";
import CreditCards from "./pages/CreditCards";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Homepage" element={<Homepage />}></Route>
        <Route path="/BankStatements" element={<BankStatements />}></Route>
        <Route path="/CreditCards" element={<CreditCards />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
