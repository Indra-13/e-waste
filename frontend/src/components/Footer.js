import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-200">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Links */}
          <div className="flex flex-col md:flex-row gap-4">
            <div>
              <h2 className="font-bold">Quick Links</h2>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/e-wastepage">E-Waste Page</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold">Services</h2>
              <ul>
                <li>
                  <Link to="/sell">Sell Electronics</Link>
                </li>
                <li>
                  <Link to="/recycle">Recycle E-Waste</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-bold">Follow Us</h2>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center">
            <h2 className="font-bold">Contact Us</h2>
            <p>Email: support@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>

        <div className="text-center mt-4">
          <p>
            &copy; {new Date().getFullYear()} Electronic Trading System. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
