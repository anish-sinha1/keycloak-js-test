import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as auth from "./auth/keycloak";
import Navbar from "./components/nav/Navbar";
import Landing from "./components/landing/Landing";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  return (
    <section className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </section>
  );
};

export default App;
