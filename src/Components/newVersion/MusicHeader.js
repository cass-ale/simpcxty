import React from 'react'
import { Link } from 'react-router-dom';



function HomeHeader() {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/press">Press</Link>
                </li>
            </ul>
        </header>
    )
}

export default HomeHeader;