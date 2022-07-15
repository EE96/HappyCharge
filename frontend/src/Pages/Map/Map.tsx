import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';

function Map() {
    return (
    <div>
        <h1>Testing Testing home page 123</h1> 
        <Sidebar/>
        <Link to="/profile">User</Link>
    </div>   
    )
}

export default Map;