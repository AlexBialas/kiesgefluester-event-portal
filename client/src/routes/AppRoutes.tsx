import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Lineup from "../pages/Lineup";
import Tickets from "../pages/Tickets";
import Location from "../pages/Location";
import RSVP from "../pages/RSVP";
import Admin from "../pages/Admin";
import Layout from "../components/Layout";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/lineup" element={<Lineup />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/location" element={<Location />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default AppRoutes;
