import './App.css';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Navigation from './Pages/Sharing/Navigation/Navigation';
import Projects from './Pages/Home/Projects/Projects';
import Banner from './Pages/Home/Banner/Banner';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import NotFound from './Pages/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import Contacts from './Pages/Home/Contacts/Contacts';
import Footer from './Pages/Home/Footer/Footer';



function App() {
  return (



    <Router>

      <Switch>

        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <Navigation></Navigation>
          <About></About>
          <Footer></Footer>
        </Route>
        <Route path="/projects">
          <Navigation></Navigation>
          <Projects></Projects>
          <Footer></Footer>
        </Route>

        <Route path="/projectDetails/:projectId">
          <Navigation></Navigation>
          <ProjectDetails></ProjectDetails>
          <Footer></Footer>
        </Route>

        <Route path="/blogs">
          <Navigation></Navigation>
          <Blogs></Blogs>

        </Route>

        <Route path="/contacts">
          <Navigation></Navigation>
          <Contacts></Contacts>
          <Footer></Footer>
        </Route>

        <Route exact path="/">
          <Home></Home>

        </Route>
        <Route path="*">
          <NotFound></NotFound>

        </Route>

      </Switch>

    </Router>

  );
}

export default App;
