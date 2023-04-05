import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function SubForm(props) {
  const formRef = React.useRef(null);


  React.useEffect(() => {
    const form = formRef.current;
    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  },);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Success! You Have Been Subscribed To The simpcxty Newsletter!");
    });
    props.formSubmit();
  }
  return(
        <>
        <Formik
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid Email Address").min(1, "Please Fill Out This Field").max(100)
            .required(""),
        })}>
        {({ errors, isValid, dirty }) => (
          <Form>
            <form
            ref={formRef}
            id="my-form"
            method="POST"
            action='https://script.google.com/macros/s/AKfycbyGFoqwkanomd1cTcYgtFlUkCY12E7_SdHuvwlW5465CJBAUIbP1pWDf6aDU-kopFMEIQ/exec'>
            <div className="footerForm">
            <label htmlFor="email">NEWSLETTER</label>
            <section id="footerForm">
            <Field type="email" name="email" id='email' style={{fontFamily: 'SpecialElite'}} placeholder='Enter Your Email . . .'/>
            <ErrorMessage name="email" />
            {dirty && (
            <button className='footerButton' type="submit" disabled={isValid === false || Object.keys(errors).length > 0}>
              SUBSCRIBE
            </button>
            )}
            </section>
            </div>
            </form>
          </Form>
        )}
      </Formik>
        </>
    )
}

export default SubForm;