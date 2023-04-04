import React, {useState, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

function ContactForm(props) {

    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbzPpC4Y1C5F91PDt9mlR4HYIV-IasjLZVMeUKqqlo-twsR0yRD9g65nV4go2SlzjXKqNA/exec"
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setLoading(true)

        fetch(scriptUrl, {
        method: 'POST',
        body: new FormData(formRef.current),

    }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
            setLoading(false)
        })
        .catch(err => console.log(err))
    }

    return(
        <>
        <Formik
        initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            message: "" }}
        validationSchema={
            Yup.object({
                firstName: Yup.string().required(""),
                lastName: Yup.string().required(""),
                email: Yup.string().email("Invalid Email Address").required(""),
                message: Yup.string().required(""),
              })
        }
        onSubmit={handleSubmit}
        ref={formRef}
        >
        <Form>
            <div className="contactForm">

            <form className='formContents'>

            <div className='formClose'><FontAwesomeIcon icon={faClose} onClick={props.closeForm} size='3x'/></div>


            <section id="contactForm">
            <label htmlFor='firstName'>First Name*</label>
            <Field type="text" name="firstName" style={{fontFamily: 'SpecialElite'}} placeholder='First Name . . .' />
            <ErrorMessage name='firstName' />
            </section>


            <section id="contactForm">
            <label htmlFor='lastName'>Last Name*</label>
            <Field type="text" name="lastName" style={{fontFamily: 'SpecialElite'}} placeholder='Last Name . . .' />
            <ErrorMessage name='lastName' />
            </section>


            <section id="contactForm">
            <label htmlFor="email">Email Address*</label>
            <Field type="email" name="email" style={{fontFamily: 'SpecialElite'}} placeholder='Enter Your Email . . .' />
            <ErrorMessage name="email" />
            </section>


            <section id="messageForm">
            <label htmlFor="message">Message*</label>
            <Field as="textarea" name="message" style={{ width: '25rem', height: '10rem', flexGrow: '1', textAlign: 'left', fontFamily: 'SpecialElite' }} placeholder='What Would You Like To Let Us Know?' />
            <ErrorMessage name="message" />
            </section>

            <section id="contactForm">
            <button className='button' type="submit" value={loading ? "Loading..." : "SEND MESSAGE"}>
            Send
            </button>
            </section>


            </form>


            </div>
        </Form>
        
        </Formik>
        </>
    )
}
export default ContactForm;