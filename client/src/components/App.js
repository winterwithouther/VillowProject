import React, { useEffect, useState } from "react";
import { Switch, Route, Routes } from "react-router-dom";
import { auth } from "./firebase";

import Collection from "./pages/Collection";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./NavBar";


import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />
      <HousePage />
      <div>
        <Routes>
          <Route/>
          <Route/>
          <Route/>
          <Route/>
          </Routes>
      </div>
    </div>
  );
}
export default App;
