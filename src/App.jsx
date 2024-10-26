import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/NavbarTemp';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Project1 from './Project1';


function App() {
  return (
    <Router>
      <Navbar />
      <Home />
        <br/>
        <br/>
        <About />
        Results
      <div className="max-w-6xl mx-auto p-4">
        
        <Projects />
        <Contact />
      </div>
      <Routes>
        {/* Define routes for project pages */}
        <Route path="/project1" element={<Project1 />} />
        {/* Add more routes for other projects as needed */}
      </Routes>
    </Router>
  );
}

export default App;




