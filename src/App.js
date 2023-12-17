import { Container } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomeComponent from "./Components/Home";
import SignupComponent from "./Components/Signup";
import LoginComponent from "./Components/Login";
import DashboardComponent from "./Components/Dashboard";
import ManageComponent from "./Components/Manage";

function App() {
  return (
    <div>
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<HomeComponent />} exact />
            <Route path="/signup" element={<SignupComponent />} exact />
            <Route path="/login" element={<LoginComponent />} exact />
            <Route path="/dashboard" element={<DashboardComponent />} exact />
            <Route path="/manage" element={<ManageComponent />} exact />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
