import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Featured from "./Components/Featured/Featured";
import SignUp from "./Components/SignUp/SignUp";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <SignUp />
      <Footer />
    </>
  );
};

export default App;
