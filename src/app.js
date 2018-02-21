import React from 'react';
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
            <HomePage />
            <ProjectsNav />
            <ProjectsPage />
            <Project name="foo" />
        </div>
    );
}
