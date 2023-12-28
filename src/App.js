//import components
import Home from './components/home/Home.js';
import  Contact from './components/contact/Contact.js';
import Projects from './components/projects/Projects.js';
import Certifications from './components/certifications/Certifications.js';
import Root from './components/root/Root.js';

import './App.css';

import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> }>
    <Route path="/" element={ <Home /> } />
    <Route path="/contact" element={ <Contact /> } />
    <Route path="/certifications" element={ <Certifications /> } />
    <Route path="/projects" element={ <Projects /> } />
  </Route>
))

function App() {
  return (
    <RouterProvider router={ appRouter } />
  );
}

export default App;
