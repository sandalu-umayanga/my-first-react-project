import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import MainInfo from "./Components/MainInfo";
import Navigation from "./Components/Navigation";
import DoctorRegister from "./Components/DoctorRegister";
import NurseRegister from "./Components/NurseRegister";
import AttendantRegister from "./Components/AttendantRegister";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <MainInfo />
      <div className="main-content">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctorregister" element={<DoctorRegister />} />
          <Route path="/nurseregister" element={<NurseRegister />} />
          <Route path="/attendantregister" element={<AttendantRegister />} />
        </Routes>
      </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
