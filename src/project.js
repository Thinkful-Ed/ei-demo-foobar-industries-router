import React from 'react';

export default function Project(props) {
    return <div>Welcome to project {props.match.params.projectName}</div>;
}
