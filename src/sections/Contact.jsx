import { useEffect, useRef, useState } from "react";
import close from "/close.svg";
import emailjs from "emailjs-com";
import gsap from "gsap";


const SERVICE_ID = "service_fsqwp14";
const TEMPLATE_ID = "template_slvufhm";
const PUBLIC_KEY = "v8Fr6SBz8cBX2P7fp";

const Contact = ({ onClose }) => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const backdropRef = useRef()
  const containerRef = useRef()
  useEffect(() => {
    document.body.style.overflow = "hidden";
    gsap.to(
      backdropRef.current,
      {  backgroundColor:"rgba(0,0,0 ,0.1)", duration: 2, ease: "power1.inOut" }
    );
    gsap.fromTo(
      containerRef.current,
      { y: "100vh" },
      { y: 0, duration: 1.5, ease: "power3.out" , opacity:1 }
    );
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
    <section
      ref={backdropRef}
      className="fixed  inset-0 z-[9999] py-[60dvh] overflow-x-hidden"

    >
      <div
        ref={containerRef}
        className="flex items-start justify-center min-h-screen  px-4"
      >
        <div className="relative bg-white w-full max-w-[720px]  aspect-[3/3] flex flex-col justify-start p-3 rounded-sm">
          <div className="flex justify-between items-center border-b pb-20 mb-8 max-md:pb-10">
            <h1 className="text-5xl font-extrabold max-md:text-4xl" style={{ fontFamily: "subtitle" }}>
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
                  <span className="w-6 max-md:hidden">01</span>
                  <span className="w-[120px] whitespace-nowrap">Your Name</span>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="flex-1 px-3 py-2 text-sm text-black/50 border-none outline-none bg-transparent"
                  />
                </label>

                <label className="flex items-center gap-6 border-b pb-2 font-bold">
                  <span className="w-6 max-md:hidden">02</span>
                  <span className="w-[120px]">Your Email</span>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="flex-1 px-3 py-2 text-sm text-black/50 border-none outline-none bg-transparent"
                  />
                </label>

                <label className="flex items-start gap-6 border-b pb-2 font-bold">
                  <span className="w-6 max-md:hidden">03</span>
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
              className="mt-8 max-md:mt-0 underline text-black py-2 font-bold text-2xl self-end"
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
