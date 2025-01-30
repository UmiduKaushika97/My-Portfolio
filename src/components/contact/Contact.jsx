// import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get In Touch 📩</h2>
        <span className="section__subtitle"> Contact me.</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk To Me<i className="uil uil-calling"></i></h3>

                <div className="contact__info">

                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">umidu.kaushika@gmail.com</span>

                        <a href="mailto:soumyajitbasak.work@gmail.com" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">WhatsApp</h3>
                        <span className="contact__card-data">(+94) 72 413 9638</span>

                        {/* <a href="https://api.whatsapp.com/send?phone=9591688760&text=Hello, I would like to connect with you!" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a> */}
                    </div>
                </div>
            </div>

            </div>
            </section>
  )
}

export default Contact