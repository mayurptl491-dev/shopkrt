import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Contact = () => {
  return (
    <main className="contact-page">
      <section className="container py-5">
        <div className="row gy-4">

          {/* Chat Information */}
          <div className="col-md-4">
            <div className="d-flex align-items-start p-3 border rounded shadow-sm h-100">
              <img src="/icons/chat-icon.png" alt="Chat" className="me-3" width="40" />
              <div>
                <h5>Chat with us</h5>
                <p className="mb-1">Our friendly team is here to help.</p>
                <strong>support@shopkart.com</strong>
              </div>
            </div>
          </div>

          {/* Call Information */}
          <div className="col-md-4">
            <div className="d-flex align-items-start p-3 border rounded shadow-sm h-100">
              <img src="/icons/contact-call.png" alt="Phone" className="me-3" width="40" />
              <div>
                <h5>Call us</h5>
                <p className="mb-1">Mon - Sat from 9 AM to 6 PM.</p>
                <strong>+91 98765 43210</strong>
              </div>
            </div>
          </div>

          {/* Office Address */}
          <div className="col-md-4">
            <div className="d-flex align-items-start p-3 border rounded shadow-sm h-100">
              <img src="/icons/location.png" alt="Location" className="me-3" width="40" />
              <div>
                <h5>Visit our office</h5>
                <p className="mb-1">Come say hello at our office.</p>
                <strong>
                  123 Shopping Street,
                  <br />
                  Bangalore, Karnataka 560001
                </strong>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="col-12">
            <div className="rounded overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps?q=I.T.VEDANT&output=embed"
                title="I.T. Vedant location"
                loading="lazy"
                className="w-100"
                style={{ height: "300px", border: "0" }}
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* Social Media */}
          <div className="col-12 text-center">
            <h5 className="mb-3">Follow us</h5>
            <div className="d-flex justify-content-center gap-4 flex-wrap fs-3">
              <FaFacebook className="text-primary" />
              <FaTwitter className="text-info" />
              <FaXTwitter className="text-dark" />
              <FaYoutube className="text-danger" />
              <FaInstagram className="text-danger" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-12 mt-5">
            <h5 className="mb-3 text-center">Send us a message</h5>
            <form className="row g-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="col-12">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="col-12">
                <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary px-4">Send Message</button>
              </div>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Contact;
