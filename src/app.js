import React from 'react';
import {Route} from 'react-router';
import NavBar from './nav-bar';
import HomePage from './home-page';
import ProjectsNav from './projects-nav';
import ProjectsPage from './projects-page';
import Project from './project';

// What we want:
//
// / -> NavBar, HomePage
// /projects -> NavBar, ProjectsNav, ProjectsPage
// /projects/:projectName -> NavBar, ProjectsNav, Project

export default function App(props) {
    return (
        <div>
            <NavBar />
            <Route path="/" component={HomePage} exact />
            <Route path="/projects" component={ProjectsNav} />
            <Route path="/projects" component={ProjectsPage} exact />
            <Route path="/projects/:projectName" component={Project} exact />
        </div>
    );
}
