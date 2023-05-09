import React from 'react'
import { Link } from 'react-router-dom';
import Sub from '../Sub';
import SubForm from './SubForm';



function Footer() {
    const [formSubmitted, setFormSubmitted] = React.useState(false);
    const handleFormSubmit = () => {
      setFormSubmitted(true);
    };
    const handleFormReset = () => {
        setFormSubmitted(false);
    };

    return (
        <footer>
        
        {formSubmitted ? (
          <Sub formReset={handleFormReset} />
        ) : (
          <SubForm formSubmit={handleFormSubmit} />
        )}

        <section id='copyright'>
            © {new Date().getFullYear().toString()} simpcxty
        </section>


            <ul>
                <li>
                    <Link to="https://caprimag.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</Link>
                </li>
                <li>
                    <Link to="https://www.caprimag.com/cookies" target="_blank" rel="noopener noreferrer">Cookies</Link>
                </li>
            </ul>


        </footer>

)
}

export default Footer;