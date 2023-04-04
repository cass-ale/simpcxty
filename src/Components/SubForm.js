import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function SubForm() {
    return(
        <>
        {/* Email Submission Form */}
        <Formik
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid Email Address").min(1, "Please Fill Out This Field")
            .required(""),
        })}
      >
        {({ errors, isValid, dirty }) => (
          <Form>
            <form
            method="POST"
            action='https://script.google.com/macros/s/AKfycbyGFoqwkanomd1cTcYgtFlUkCY12E7_SdHuvwlW5465CJBAUIbP1pWDf6aDU-kopFMEIQ/exec'>
            <div className="footerForm">
            <label htmlFor="email">NEWSLETTER</label>
            <section id="footerForm">
            <Field type="email" name="email" style={{fontFamily: 'SpecialElite'}} placeholder='Enter Your Email . . .'/>
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