import React from "react";
import "../contact-info.css"
import {Link} from "react-router-dom"
export default function Contact() {
  return (



    <div>
      <div
        className="dc-dynamic-chicklet"
        style={{
          zIndex: 108000,
          position: "fixed",
          display: "block",
          right: 20,
          bottom: 20,
        }}
      >
        <Link to="/contact" className="contact-link">
          <div data-dc-component-name="chicklet#default">
            <button className="contact-button">
              <div className="contact-title">
                <div>
                  <i
                    id="icn"
                    className="fa-regular fa-message"
                    style={{ color: "#000000" }}
                  />
                  <span> Contact Me</span>
                </div>
              </div>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
