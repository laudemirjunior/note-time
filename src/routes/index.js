import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Groups from "../pages/groups";
import Home from "../pages/home";
import Login from "../pages/login";

import Register from "../pages/register";
import MyGroups from "../pages/myGroups";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="groups" element={<Groups />} />
      <Route path="my-groups" element={<MyGroups />} />
    </Routes>
  );
}
