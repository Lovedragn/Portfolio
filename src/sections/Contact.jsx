import { useEffect } from "react";
import close from "/close.svg";

const Contact = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <section className="fixed inset-0 z-[9999] bg-black/10 backdrop-blur-lg overflow-y-auto">
      <div className="flex items-start justify-center min-h-screen py-[30vh] px-4">
        <div className="relative bg-white w-full max-w-[620px] shadow-4xl aspect-[1/1.1] flex flex-col justify-start p-3 rounded-sm">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-20 mb-8">
            <h1
              className="text-5xl font-extrabold"
              style={{ fontFamily: "subtitle" }}
            >
              Let's Talk
            </h1>
            <button onClick={onClose} aria-label="Close">
              <img src={close} alt="Close" className="w-10" />
            </button>
          </div>

          {/* Form */}
          <form
            className="flex flex-col justify-between h-full w-full text-[1.5rem]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex w-full h-full">
              <div className=" w-40 h-full" />
              <div className="flex flex-col gap-4 w-full">
                {/* Row: Name */}
                <label className="flex items-center gap-6 border-b pb-2 font-bold">
                  <span className="w-6">01</span>
                  <span className="w-[120px]">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    required
                    className="flex-1 px-3 py-2 text-sm text-black/50 border-none outline-none bg-transparent"
                  />
                </label>

                {/* Row: Email */}
                <label className="flex items-center gap-6 border-b pb-2 font-bold">
                  <span className="w-6">02</span>
                  <span className="w-[120px]">Your Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    required
                    className="flex-1 px-3 py-2 text-sm text-black/50 border-none outline-none bg-transparent"
                  />
                </label>

                {/* Row: Message */}
                <label className="flex items-start gap-6 border-b pb-2 font-bold">
                  <span className="w-6">03</span>
                  <span className="w-[120px]">Message</span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Your message..."
                    className="flex-1 px-3 py-2 text-sm text-black/50 border-none outline-none resize-none bg-transparent"
                  />
                </label>
              </div>
            </div>
            {/* Submit */}
            <button
              type="submit"
              className="mt-8 underline text-black py-2 font-bold text-2xl self-end"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
