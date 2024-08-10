import React, { useState } from "react"; // Import useState for managing authentication
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import MainInfo from "./Components/MainInfo";
import Navigation from "./Components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";
import Profile from "./Components/Profile";
import SelfHome from "./Components/SelfHome";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false); // State for authentication

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation isAuthenticated={isAuthenticated} /> {/* Pass the authentication state */}
        <MainInfo />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctorregister" element={<RegisterForm name="Doctor Registration" link="http://localhost:8080/api/v1/doctor/saveDoctor" />} />
            <Route path="/nurseregister" element={<RegisterForm name="Nurse Registration" link="http://localhost:8080/api/v1/nurse/saveNurse" />} />
            <Route path="/attendantregister" element={<RegisterForm name="Attendant Registration" link="http://localhost:8080/api/v1/attendant/saveAttendant" />} />
            <Route path="/doctorLogin" element={<LoginForm name="Doctor Login" link="http://localhost:8080/api/v1/doctor/loginDoctor" forwardTo="/doctorHome" setAuthenticated={setAuthenticated} />} />
            <Route path="/nurseLogin" element={<LoginForm name="Nurse Login" link="http://localhost:8080/api/v1/nurse/loginNurse" forwardTo="/nurseHome" setAuthenticated={setAuthenticated} />} />
            <Route path="/patientLogin" element={<LoginForm name="Patient Login" link="http://localhost:8080/api/v1/patient/loginPatient" setAuthenticated={setAuthenticated} />} />
            <Route path="/adminLogin" element={<LoginForm name="Admin Login" link="http://localhost:8080/api/v1/admin/loginAdmin" setAuthenticated={setAuthenticated} />} />
            <Route path="/doctorHome" element={<SelfHome profileLink="/doctorProfile" pronoun="Dr. "/>} />
            <Route path="/nurseHome" element={<SelfHome profileLink="/nurseProfile" pronoun="Nurse. "/>} />

            <Route path="/doctorProfile" element={<Profile 
            getPictureLink="http://localhost:8080/api/v1/doctor/getProfilePicture/" 
            userUpdateLink="http://localhost:8080/api/v1/doctor/updateDoctor" 
            updatePictureLink="http://localhost:8080/api/v1/doctor/updateProfilePicture/"
            pronoun="Dr. "/>} />

            <Route path="/nurseProfile" element={<Profile 
            getPictureLink="http://localhost:8080/api/v1/nurse/getProfilePicture/" 
            userUpdateLink="http://localhost:8080/api/v1/nurse/updateNurse" 
            updatePictureLink="http://localhost:8080/api/v1/nurse/updateProfilePicture/"
            pronoun="Nurse. "/>} />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
