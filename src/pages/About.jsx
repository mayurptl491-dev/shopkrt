
import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Brands from "../components/Brand";
import "./about.css"

const About = () => {
  return (
    <div className="shopkart-about">
      {/* Hero Section */}
      <section className="about-hero text-center">
        <div className="container py-5">
          <span className="about-badge">WELCOME TO SHOPKART</span>

          <h1 className="display-4 fw-bold mt-3">
            Shopping Made <span>Simple.</span>
          </h1>

          <p className="lead mx-auto mt-3">
            Discover quality products, unbeatable value, and a
            shopping experience designed around you.
          </p>

          <NavLink
            to="/Products"
            className="btn btn-danger btn-lg rounded-pill px-5 mt-3"
          >
            Explore Products →
          </NavLink>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="section-label">WHO WE ARE</span>

            <h2 className="fw-bold display-6 mt-2">
              Your Everyday Shopping Partner
            </h2>

            <p className="text-secondary mt-3">
              At <strong>ShopKart</strong>, we believe that great
              shopping should be simple, convenient, and affordable.
              Our goal is to bring quality products closer to you,
              all in one place.
            </p>

            <p className="text-secondary">
              From fashion and electronics to home essentials,
              we help you discover products that fit your lifestyle
              without making shopping complicated.
            </p>

            <NavLink
              to="/Products"
              className="btn btn-dark rounded-pill px-4 mt-2"
            >
              Start Shopping
            </NavLink>
          </div>

          <div className="col-lg-6">
            <div className="about-highlight p-4 p-md-5">
              <div className="about-icon">🛍️</div>
              <h3 className="fw-bold mt-3">
                Everything You Need, In One Place
              </h3>
              <p className="text-secondary mb-0">
                Explore a wide range of products with a convenient,
                customer-focused online shopping experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label">THE SHOPKART ADVANTAGE</span>
            <h2 className="fw-bold mt-2">
              Why Shop With Us?
            </h2>
            <p className="text-secondary">
              We make every shopping experience count.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card h-100 text-center p-4">
                <div className="feature-icon">✨</div>
                <h5 className="fw-bold mt-3">Quality Products</h5>
                <p className="text-secondary mb-0">
                  Discover products selected to meet your everyday needs.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card h-100 text-center p-4">
                <div className="feature-icon">💰</div>
                <h5 className="fw-bold mt-3">Great Value</h5>
                <p className="text-secondary mb-0">
                  Find products at prices that make shopping worthwhile.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card h-100 text-center p-4">
                <div className="feature-icon">❤️</div>
                <h5 className="fw-bold mt-3">Customer First</h5>
                <p className="text-secondary mb-0">
                  Enjoy a simple and convenient shopping experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="container py-5">
        <div className="text-center mb-4">
          <span className="section-label">OUR COLLECTION</span>
          <h2 className="fw-bold mt-2">Explore Our Brands</h2>
          <p className="text-secondary">
            Discover brands and products for your lifestyle.
          </p>
        </div>

        <Brands />
      </section>

      {/* Bottom Call to Action */}
      <section className="container pb-5">
        <div className="about-cta text-center p-4 p-md-5">
          <h2 className="fw-bold">
            Ready to Find Your Favorites?
          </h2>
          <p className="mb-4">
            Your next great find is just a click away.
          </p>

          <NavLink
            to="/Products"
            className="btn btn-light btn-lg rounded-pill px-5 fw-semibold"
          >
            Shop Now →
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default About;
