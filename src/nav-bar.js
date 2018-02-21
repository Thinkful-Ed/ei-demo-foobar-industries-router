import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar(props) {
    return (
        <div className="navbar">
            <h1>Foobar Industries</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </div>
    );
}
