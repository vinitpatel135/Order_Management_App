import React from "react";
import "./Footer.css";
// import logo from "/assets/logo.png";
// import paymentIcon from "../../Assets/paymentIcon.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

import { Link } from "react-router-dom";
import { Path } from "../../Commen/Path";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed Successfully");
  };

  return (
    <div>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer_left">
            <div className="footer_logo_container">
              <img src={"/assets/WhatsApp_Image_2024-07-30_at_11.55.04_AM__1_-removebg-preview.png"} alt="" width={130} />
            </div>

            <p>Krishna Nagar 318 Dabhoi Kapurai Road Kotambi Vadodara Gujarat, 390004</p>

            <div className="footer_address">
              <strong>kalgitea@gmail.com</strong>
              <strong>+91 84609 99006</strong>
            </div>

            <div className="social_links">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              <FaYoutube />
              <FaPinterest />
            </div>
          </div>

          <div className="footer_content">
            <h5>Company</h5>
            <div className="links_container">
              <ul onClick={""}>
                <li>
                  <Link to={Path.homescreen}>Home</Link>
                </li>
                <li>
                  <Link to={Path.product}>Products</Link>
                </li>
                <li>
                  <Link to={Path.about}>About</Link>
                </li>
                <li>
                  <Link to={Path.about}>Blog</Link>
                </li>
                <li>
                  <Link to={Path.contact}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="footer_content">
            <h5>Shop</h5>
            <div className="links_container">
              <ul onClick={scrollToTop}>
                <li>
                  <Link to="/shop">New Arrivals</Link>
                </li>
                <li>
                  <Link to="/shop">Accessories</Link>
                </li>
                <li>
                  <Link to="/shop">Men</Link>
                </li>
                <li>
                  <Link to="/shop">Women</Link>
                </li>
                <li>
                  <Link to="/shop">Shop All</Link>
                </li>
              </ul>
            </div>
          </div> */}
          {/* <div className="footer_content">
            <h5>Help</h5>
            <div className="links_container">
              <ul onClick={scrollToTop}>
                <li>
                  <Link to="/contact">Customer Service</Link>
                </li>
                <li>
                  <Link to="/loginSignUp">My Account</Link>
                </li>
                <li>
                  <Link to="/contact">Find a Store</Link>
                </li>
                <li>
                  <Link to="/terms">Legal & Privacy</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/">Gift Card</Link>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="footer_right">
            <h5>Subscribe</h5>
            <p>
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>

            <form onSubmit={handleSubscribe}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Join</button>
            </form>

            <h6>Secure Payments</h6>
            <div className="paymentIconContainer">
              <img src={"/assets/paymentIcon.png"} alt="" />
            </div>
          </div>
        </div>
       
      </footer>
    </div>
  );
};

export default Footer;
