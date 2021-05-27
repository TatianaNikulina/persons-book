import React from 'react'
import {NavLink} from "react-router-dom";

const Navigation = () => {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact={true} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/person/add">Add Person</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation