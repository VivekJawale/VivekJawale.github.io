import React, { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar";
const Home = lazy(() => import("./Components/Home"));
const About = lazy(() => import("./Components/About"));
const Education = lazy(() => import("./Components/Education"));
const Techstack = lazy(() => import("./Components/Techstack"));
const Github = lazy(() => import("./Components/Github"));
const Contact = lazy(() => import("./Components/Contact"));
const Footer = lazy(() => import("./Components/Footer"));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
        <About />
        <Education />
        <Techstack />
        <Github />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
