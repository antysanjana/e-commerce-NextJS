// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Routers from "./routers";
import Home from "@/app/page";
import { LoginForm } from "@/components/LoginForm";
const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
