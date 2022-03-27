import React from "react";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "Resume-Aditya-Mall"
  }, [])
  return (
    <>
      <Navbar />
      <MainContent />
      {/* <Footer /> */}
    </>
  );
};

export default App;
