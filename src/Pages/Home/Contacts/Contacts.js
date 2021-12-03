import React from 'react';
import './Contacts.css'
import { useForm, ValidationError } from '@formspree/react';


const Contacts = () => {
    const [state, handleSubmit] = useForm("mvolpnlw");
    if (state.succeeded) {
        alert('Thanks for Your Email!');

    }
    return (
        <div className="contact-section container mt-5  pt-5
         ">
            <div >
                <div className="about-me mt-5">
                    <h3 >Contact <span className="yellow-style">Me</span></h3>
                </div>
                <p>Have any question or want to work together?</p>
            </div>
            <div className="mt-5">

                <form onSubmit={handleSubmit} >

                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="contact-form"
                        placeholder="Your Email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <br />
                    <br />

                    <textarea
                        id="message"
                        name="message"
                        className="contact-form "
                        placeholder="Your Message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <br />
                    <br />

                    <button className=" submit-button" type="submit" disabled={state.submitting} >
                        Submit
                    </button>
                </form>


            </div>
        </div>

    );
};

export default Contacts;