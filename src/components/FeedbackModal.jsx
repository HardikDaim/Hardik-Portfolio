// FeedbackModal.js
import React from "react";
import { Link } from 'react-router-dom';

export default function FeedbackModal({ onClose, onClick }) {
  return (
    <div>
      <div className="fixed drop-shadow-2xl top-0 left-0 w-full h-full flex flex-row flex-wrap items-center justify-center backdrop-blur-md bg-opacity-50">
        <div className="bg-white p-8 rounded-2xl relative">
          <div
            onClick={onClose}
            className="absolute cursor-pointer top-9 right-8 drop-shadow-lg  text-gray-500"
          >
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios-filled/50/000000/delete-sign--v1.png"
              alt="delete-sign--v1"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">
            🚀 Give Your Feedback
          </h2>
          <p className="text-gray-700 mb-4">
            I value your opinion! Your feedback helps us improve and provide a
            better experience.
          </p>
          <div onClick={onClick} className="flex justify-center">
            <Link to="/feedback">
              <button className="transition ease-in-out duration-500 bg-purple-600 hover:bg-blue-900 hover:-translate-y-1 text-white px-4 py-2 rounded">
                Send Feedback
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
