import { useEffect, useRef, useState } from "react";
import close from "/close.svg";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_fsqwp14";
const TEMPLATE_ID = "template_slvufhm";
const PUBLIC_KEY = "v8Fr6SBz8cBX2P7fp";

const Contact = ({ onClose }) => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log("Email sent", result);
          setSent(true);
          setIsSending(false);
          formRef.current.reset();
        },
        (error) => {
          console.error("Email failed", error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <section className="fixed inset-0 z-[9999] bg-black/10 backdrop-blur-lg overflow-y-auto">
      
      <div className="flex items-start justify-center min-h-screen py-[30vh] px-4">
        <div className="relative bg-white w-full max-w-[720px] shadow-4xl aspect-[3/3] flex flex-col justify-start p-3 rounded-sm">
>>>>>>> parent of af2b244 (batch 2 gsap)
          <div className="flex justify-between items-center border-b pb-20 mb-8">
            <h1 className="text-5xl font-extrabold" style={{ fontFamily: "subtitle" }}>
              Let's Talk
            </h1>
            <button onClick={onClose} aria-label="Close">
              <img src={close} alt="Close" className="w-10" />
            </button>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col justify-between h-full w-full text-[1.5rem]"
          >
            <div className="flex w-full h-full">
              <div className=" w-40 h-full" />
              <div className="flex flex-col gap-4 w-full">
                <label className="flex items-center gap-6 border-b pb-2 font-bold">
                  <span className="w-6">01</span>
                  <span className="w-[120px]">Your Name</span>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="flex-1 px-3 py-2 text-sm text-black/50 border-none outline-none bg-transparent"
                  />
                </label>

                <label className="flex items-center gap-6 border-b pb-2 font-bold">
                  <span className="w-6">02</span>
                  <span className="w-[120px]">Your Email</span>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="flex-1 px-3 py-2 text-sm text-black/50 border-none outline-none bg-transparent"
                  />
                </label>

                <label className="flex items-start gap-6 border-b pb-2 font-bold">
                  <span className="w-6">03</span>
                  <span className="w-[120px]">Message</span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="flex-1 px-3 py-2 text-sm text-black/50 border-none outline-none resize-none bg-transparent"
                  />
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="mt-8 underline text-black py-2 font-bold text-2xl self-end"
            >
              {isSending ? "Sending..." : sent ? "Sent!" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
