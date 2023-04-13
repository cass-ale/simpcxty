import React, {useState, useRef} from "react";
import NotHomeHeader from './NotHomeHeader';
import Footer from './Footer';
import Form from './ContactForm'

function Contact() {
    const targetRef = useRef(null);
    const [showForm, setShowForm] = useState(false);
    const openForm = () => {
        setShowForm(true);
        targetRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
    };
    const closeForm = () => {
        setShowForm(false);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }
    const mobileForm = () => {
        setShowForm(true);
    }
    return (
        <>
            <header>
                <NotHomeHeader />
            </header>

            <main>
            <div className="contactContainer">

            <section id="conHeader" ref={targetRef}><span id="conHeader" style={{fontFamily: "SpecialElite", fontSize: '2.8rem'}}>Connect With</span> simpcxty</section>

            <p>If You Are Interested In Working With <span style={{fontFamily: "Kristi", fontSize: "2.65rem"}}>simpcxty</span>, Or Eager To Talk With Him About His Work, Feel Free To Fill Out Our Contact Form, And Our Team Will Be In Touch With You Shortly After. All Inquiries Involving Music, Modeling, Custom Clothing, Or Interviews Can Be Submitted Here.<br /><br /> Please Note That This Inbox Is Managed By The CAPRI Media Administrative Team, And We Only Monitor Our Inbox During U.S. Business Hours (9:00-17:00) On Monday Through Friday. We Look Forward To Hearing From You!</p>

            <button className="conButton" onClick={openForm}>CONNECT</button>
            <button className="mobileCon" onClick={mobileForm}>CONNECT</button>
            {showForm && <Form closeForm={closeForm} />}
            </div>

            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Contact;