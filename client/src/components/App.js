import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { Switch, Route } from "react-router-dom";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { auth } from "./firebase";
import NavBar from "./NavBar";


=======
import { Switch, Route, Routes } from "react-router-dom";

import Header from "./Header";
>>>>>>> d6a6940353c3a4b22fa5953bb1e50cf4fe608f66

function App() {
  return (
    <>
    <Header />
    <div>
      <Routes>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
        </Routes>
    </div>
    </>
  );
}
export default App;
