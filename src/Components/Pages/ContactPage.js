import React, {useState, useRef} from "react";
import Form from '../ContactForm';
import firehouse from "../../Images/firehouse.webp"
import designer from '../../Images/AA8A281301.webp'
// import model from '../../Images/IMG_0017.webp'




function Contact() {
    const targetRef = useRef(null);
    const cardRef = useRef(null);
    const handleClick = () => {
        cardRef.current.scrollIntoView({
            behavior:'smooth',
            block: 'start',
        });
    }
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

            <main>
            <section className="conCards">
                <article onClick={handleClick} className="cardHolder" id="swriter">
                <section className="imgHolder"><img src={firehouse} alt="" /></section>
                    <section id="text"><h2>SONGWRITER</h2>
                    <p>Prolific creator of an R&B sound that pays homage to the old school greats while also appealing to the new school.<br /><br /> Click here to contact simpcxty about a potential musical collaboration! </p></section>
                </article>

                {/* <article onClick={handleClick} className="cardHolder">
                <section className="imgHolder"><img style={{position: 'relative', bottom: "7rem"}} src={model} alt="" /></section>
                    <section id="text"><h2>MODEL</h2>
                    <p></p></section>
                </article> */}

                <article onClick={handleClick} className="cardHolder" id="designer">
                    <section className="imgHolder"><img style={{position: 'relative', bottom: "6rem"}} src={designer} alt="" /></section>
                    <section id="text"><h2>DESIGNER</h2>
                    <p>simpcxty has an eye for fresh style and has created countless eye-grabbing looks for his onstage performances.<br /><br /> Click here for any inquiries regarding styling or custom pieces.</p></section>
                </article>


            </section>

            <section className="contactContainer" ref={cardRef}>
            <section id="conHeader" ref={targetRef}><span id="conHeader" style={{fontFamily: "SpecialElite", fontSize: '2.8rem'}}>Connect With</span> simpcxty</section>

            <p>If You Are Interested In Working With <span style={{fontFamily: "Kristi", fontSize: "2.65rem"}}>simpcxty</span>, Or Eager To Talk With Him About His Work, Feel Free To Fill Out Our Contact Form, And Our Team Will Be In Touch With You Shortly After. All Inquiries Involving Music, Modeling, Custom Clothing, Or Interviews Can Be Submitted Here.<br /><br /> Please Note That This Inbox Is Managed By The CAPRI Media Administrative Team, And We Only Monitor Our Inbox During U.S. Business Hours (9:00-17:00) On Monday Through Friday. We Look Forward To Hearing From You!</p>

            <button className="conButton" onClick={openForm}>CONNECT</button>
            <button className="mobileCon" onClick={mobileForm}>CONNECT</button>
            {showForm && <Form closeForm={closeForm} />}
            </section>

            </main>
        </>
    )
}

export default Contact;