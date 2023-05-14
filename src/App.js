import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Github from "./Components/Github";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Techstack from "./Components/Techstack";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Techstack />
      <Github />
      
      <Contact />

      <Footer />
    </>
  );
}

export default App;
