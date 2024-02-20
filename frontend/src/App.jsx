import React from "react";
import Navbar from "./components/NavBar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Signin from "./Pages/SignIn";
import Signup from "./Pages/SignUp";
import Analysis from "./Pages/Analysis";
import HomePage from "./Pages/HomePage";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <ThemeProvider>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
};

export default App;
