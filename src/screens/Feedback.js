import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import SocialIcons from "../components/socialIcons";
import Footer from "../components/footer";
import emailjs from "@emailjs/browser";

export default function Feedback() {
  const [showHash, setShowHash] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const form = useRef();

  const handleMouseEnter = () => {
    setShowHash(true);
  };

  const handleMouseLeave = () => {
    setShowHash(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const firstName = event.target["first-name"].value;
    const lastName = event.target["last-name"].value;
    const email = event.target["email"].value;
    const userFeedback = event.target["user-feedback"].value;

    if (!firstName || !lastName || !email || !userFeedback) {
      alert("All fields are required. Please fill in all the details.");
      return;
    }

    // Combine first-name and last-name
    const fullName = `${firstName} ${lastName}`;

    // Prepare the data for EmailJS
    const emailData = {
      from_name: fullName,
      email: email,
      userFeedback: userFeedback,
    };

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_mbdpriw",
        "template_dwaytbj",
        form.current,
        "DiI1IEAb6yplb2yv5"
      );

      setLoading(false);

      alert("Message Sent Successfully");
      console.log(result.text);
    } catch (error) {
      setLoading(false);

      console.log(error.text);
      alert("Error sending message. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <SocialIcons />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 ">
          <h1
            className="text-3xl font-bold tracking-tight text-gray-900"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {showHash ? "#" : ""} Feedback
            <hr />
          </h1>
          <div className="border-b border-gray-900/10 pb-12">
            <p className="mt-4 text-sm font-semibold leading-6 text-gray-600">
              Thank you for visiting my portfolio website. Your feedback is
              valuable and helps me enhance the user experience. Whether you
              have thoughts, suggestions, or just want to share your experience,
              I'd love to hear from you!{" "}
            </p>
            <p className="text-gray-600">
              {" "}
              Here are a few things you might consider sharing your feedback on:
            </p>
            <ul className="list-disc text-gray-600 ml-6 mb-4">
              <li>Your overall experience with the website.</li>
              <li>The ease of navigation and finding information.</li>
              <li>Specific features or content you liked or disliked.</li>
              <li>Any suggestions for improvement or additional content.</li>
              <li>Any technical issues you encountered.</li>
            </ul>

            <form ref={form} onSubmit={handleSubmit}>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        required
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 border-solid border-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none focus:border-indigo-600"
                      />
                    </div>
                  </label>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                    <div className="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        required
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none focus:border-indigo-600"
                      />
                    </div>
                  </label>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                    <div className="mt-2">
                      <input
                        name="email"
                        required
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none focus:border-indigo-600"
                      />
                    </div>
                  </label>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tell about your Feedback
                    <div className="mt-2">
                      <textarea
                        name="user-feedback"
                        required
                        rows={4}
                        className="block resize-none w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none focus:border-indigo-600"
                        defaultValue={""}
                      />
                    </div>
                  </label>
                  <p className="text-gray-600 my-4">
                    Your insights will help me continue to improve and tailor
                    the website to better meet the needs of its users. Please
                    feel free to use the form below to share your thoughts or
                    reach out to me through the contact details provided on the
                    "Contact" page.
                  </p>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`rounded-full inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-gray-800 text-white hover:bg-slate-700 inline-flex items-center focus:outline-none focus:ring focus:border-indigo-600 ${
                        loading ? "cursor-not-allowed" : ""
                      }`}
                    >
                      {loading ? "Submitting..." : "Submit Feedback"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </header>
      <Footer />
    </>
  );
}
