import React from 'react';

export default function NavBar(props) {
    return (
        <div className="navbar">
            <h1>Foobar Industries</h1>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
            </ul>
        </div>
    );
}
