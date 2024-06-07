import React from "react";
import "./footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function footer() {
  return (
    <div className="footer">
      <div className="footer-info">
        <span className="bold-text">IT Group </span>
        <span className="block">C. Salvador de Madariaga, 1</span> 28027 Madrid{" "}
        <span className="block">Spain</span>
      </div>
      <div className="footer-info-social">
        <span className="info">Follow us on</span>
        <FaTwitter className="twitter-icon" />
        <FaYoutube className="youtube-icon" />
      </div>
      <div className="footer-info-copyright">
        <div className="copyright">
          <span>Copyright © 2022 IT Hote ls. All rights reserved.</span>
        </div>
        <div className="credits">
          <span>
            Photos by Felix Mooneeram <a href="#">Serge Kutuzov</a> on{" "}
            <a href="#">Unsplash</a>
          </span>
        </div>
      </div>
    </div>
  );
}
