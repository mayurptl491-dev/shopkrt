
import React from "react";


const Footer = () => {
  return (
    <div>
      <footer className="shopkart-footer">

        <div className="container py-5">

          <div className="row">

            {/* Brand */}
            <div className="col-md-4 mb-4">
              <h2 className="footer-brand">
                ✦ ShopKart
              </h2>

              <p className="footer-description">
                Your one-stop destination for amazing
                products, great deals, and a seamless
                shopping experience.
              </p>

              <div className="footer-socials">
                <a href="https://www.facebook.com/">Facebook</a>
                <a href="https://www.instagram.com/">Instagram</a>
                <a href="https://www.linkedin.com/">LinkedIn</a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-4">
              <h5>Quick Links</h5>

              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/cart">My Cart</a></li>
                <li><a href="/login">Login</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-4 mb-4">
              <h5>Contact Us</h5>

              <p>
                <i className="bi bi-envelope"></i>
                {" "}support@shopkart.com
              </p>

              <p>
                <i className="bi bi-telephone"></i>
                {" "}+91 98765 43210
              </p>

              <p>
                <i className="bi bi-geo-alt"></i>
                {" "}Pune, Maharashtra, India
              </p>
            </div>

          </div>

        </div>

        {/* Copyright */}
        <div className="footer-bottom text-center p-3">
          © {new Date().getFullYear()} ShopKart.
          All rights reserved.
          <span className="footer-made">
            {" "}Made with ❤️ for shoppers
          </span>
        </div>

      </footer>
    </div>
  );
};

export default Footer;
