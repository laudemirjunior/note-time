import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Groups from "../pages/groups";
import Home from "../pages/home";
import Login from "../pages/login";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="groups" element={<Groups/>} />
    </Routes>
  );
}
