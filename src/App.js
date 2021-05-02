
import './App.css';
import Home from './Component/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Component/About/About';
import Resume from './Component/Resume/Resume';
import Project from './Component/Resume/Project/Project';
import Contact from './Component/Contact/Contact';
import Blogs from './Component/Blog/Blogs';
import Notfound from './Component/Notfound/Notfound';


function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About/>
          </Route>

          <Route path="/resume">
            <Resume/>
          </Route>

          <Route path="/project">
            <Project/>
          </Route>

          <Route path="/contact">
            <Contact/>
          </Route>

          <Route path="/blogs">
            <Blogs/>
          </Route>

          <Route path="/*">
            <Notfound/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
