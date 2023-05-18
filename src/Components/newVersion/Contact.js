import React from 'react'
import ContactHeader from './ContactHeader';
import Footer from './Footer';
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
            <Footer />
        </footer>

        </>
    )
}

export default Contact;