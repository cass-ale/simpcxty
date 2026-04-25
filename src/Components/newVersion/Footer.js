import React from 'react'
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
            &copy; {new Date().getFullYear().toString()} simpcxty
        </section>

            <ul>
                <li>
                    <a href="https://caprimag.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>
                </li>
                <li>
                    <a href="https://www.caprimag.com/cookies" target="_blank" rel="noopener noreferrer">Cookies</a>
                </li>
            </ul>

        </footer>

)
}

export default Footer;
