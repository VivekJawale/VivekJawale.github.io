
import Contact from './Components/ContactMe/Contact';
import About from './Components/Home/About';
import { Projects } from './Components/My_Blogs/Projects';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';
import Stats from './Components/Stats/Stats';

import Tech from './Components/Tech_stack/Tech';



function App() {
  return (
    <div>
       <Navbar/>
       <About/>
       <Tech/>
       <Skills/>
      {/* <Projects/> */}
      <Stats/>
      {/* <Contact/> */}

    </div>
  );
}

export default App;