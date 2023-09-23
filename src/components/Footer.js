import React from "react";

import { pageLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href} className="footer-link">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => (
          <li key={link.id}>
            <a
              rel="noreferrer"
              href={link.href}
              target="_blank"
              className="footer-icon"
            >
              <i className={link.icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{ new Date().getFullYear() }</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
