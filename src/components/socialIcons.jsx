import React from "react";
import "../socialIcons.css";
export default function SocialIcons() {
  return (
    <div className="hidden lg:block">
      {/* Start Social Media Buttons */}
      <div className="social-btn">
        <a href="https://github.com/HardikDaim" target="_blank">
          GitHub
          <i className="fa-brands fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/hardik-daim-ab0b07251/"
          target="_blank"
        >
          LinkedIn
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a href="https://www.instagram.com/hardikdaim_17/" target="_blank">
          Instagram
          <i className="fa-brands fa-instagram" />
        </a>
      </div>
    </div>
  );
}
