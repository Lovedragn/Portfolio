import React, { useEffect, useRef } from "react";

const Contact = ({ onClose }) => {
  const modalRef = useRef();

  // Close on outside click or Esc key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  // Optional: prevent actual submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent (placeholder)");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md">
      <div
        ref={modalRef}
        className="bg-white text-black w-full max-w-md p-8 rounded-xl shadow-2xl relative"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition duration-200"
          aria-label="Close"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            name="location"
            value="Alandur"
            readOnly
            className="border border-gray-300 p-3 rounded bg-gray-100"
          />
          <textarea
            name="message"
            rows="4"
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Your Message"
            required
          />
          <button
            type="submit"
            className="bg-black text-white py-3 rounded hover:bg-gray-800 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
