import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 
'react-router-dom';
import { home } from './components/pages/home';
import aboutMe from './components/pages/aboutMe';
import experiences from './components/pages/experiences';
import projects from './components/pages/projects';
import services from './components/pages/services';
import education from './components/pages/education';
import blog from './components/pages/blog';
import contactMe from './components/pages/contactMe';

function App () {
  return (
    <>
      <Router>
        <Navbar/>

        <Switch>
          <Route path='/' exact component={home}/>
          <Route path='/aboutMe' exact component={aboutMe}/>
          <Route path='/home' exact component={home}/>
          <Route path ='/experiences' exact component={experiences}/>
          <Route path ='/projects' exact component= {projects}/>
          <Route path='/services' exact component= {services}/>
          <Route path='/education' exact component= {education}/>
          <Route path='/blog' exact component= {blog}/>
          <Route path='/contactMe' exact component= {contactMe}/>
        </Switch>
      </Router>
    </>
  )
}

export default App;
