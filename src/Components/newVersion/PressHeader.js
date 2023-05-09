import React from 'react'
import { Link } from 'react-router-dom';





function PressHeader() {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/music">Music</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </header>
    )
}

export default PressHeader;