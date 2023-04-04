import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

function ContactForm(props) {
const handleSubmit = () => {
    alert("Thank you for contacting us. We will get back to you as soon as possible.");
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
                firstName: Yup.string().min(1, "Please Fill Out This Field").max(100).required(""),
                lastName: Yup.string().min(1, "Please Fill Out This Field").max(100).required(""),
                email: Yup.string().min(1, "Please Fill Out This Field").max(100).email("Invalid Email Address").required(""),
                message: Yup.string().min(10, "Messages Must Be At Least 10 Characters").max(750, "Please Shorten Your Message").required(""),
              })
        }
        >
            {({ errors, isValid, dirty }) => (
        <Form>
            <div className="contactForm">

            <form className='formContents'
            method='POST'
            action='https://script.google.com/macros/s/AKfycbzenjxt9Q2xBQw2HRaYYmmUx7sWXDpDLEWtXxurdnWGjeSSBP8LQIst0kJN0Ve8b1fl3A/exec'>

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
                {dirty && (
            <button className='button' type="submit" disabled={isValid === false || Object.keys(errors).length > 0}>
            Send
            </button>)}
            </section>


            </form>


            </div>
        </Form>
            )}
        </Formik>
        </>
    )
}
export default ContactForm;