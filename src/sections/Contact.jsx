import React from "react";

const Contact = ({ children }) => {
  return (
    <div className="bg-white text-black rounded-2xl shadow-2xl p-10 min-w-[350px] min-h-[300px] flex flex-col items-center justify-center relative">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      {/* Your contact form or content here */}
      <div className="w-full">Contact form or info goes here.</div>
      {children}
    </div>
  );
};

export default Contact;
