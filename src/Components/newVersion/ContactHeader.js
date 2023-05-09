import React from 'react'
import { Link } from 'react-router-dom';
function ContactHeader() {
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
                    <Link to="/press">Press</Link>
                </li>
            </ul>
        </header>
    )
}

export default ContactHeader;