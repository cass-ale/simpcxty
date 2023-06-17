import React from 'react'
import ContactHeader from './ContactHeader';
import ContactPage from "../Pages/ContactPage";
import ScrollToTopOnMount from '../Scroll';

function Contact() {
    return (
        <>
        <ScrollToTopOnMount />
        <header>
            <ContactHeader />
        </header>

        <main className='contactPage'>


        <ContactPage />


        </main>

        <footer>
        </footer>

        </>
    )
}

export default Contact;