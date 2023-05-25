import React from 'react'
import ContactHeader from './ContactHeader';
import ContactPage from "../Pages/ContactPage";

function Contact() {
    return (
        <>
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