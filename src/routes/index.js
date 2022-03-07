import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import Login from "../pages/login";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Login" element={<Login />} />
      <Route path="Dashboard" element={<Dashboard />} />
    </Routes>
  );
}
