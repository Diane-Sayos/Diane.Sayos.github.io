//import components
import Root from './components/root/Root.js';

import Projects from './components/projects/Projects.js';
import Certifications from './components/certifications/Certifications.js';


import Home from './components/home/Home.js';
import Personal from './components/home/Personal.js';
import Techstack from './components/home/Techstack.js';
import Testimonials from './components/home/Testimonials.js';

import './App.css';

import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> }>
    <Route path="/" element={ <Home /> }>
      <Route path="/" element={ <Personal /> } />
      <Route path="/techstack" element={ <Techstack /> } />
      <Route path="/testimonials" element={ <Testimonials /> } />
    </Route>
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
