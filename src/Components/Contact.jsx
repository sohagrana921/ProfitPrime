import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Lottie from "lottie-react";
import email from "../../animation_lmcjoff8.json";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p578xaq",
        "template_osftikb",
        form.current,
        "7Mvl3Q6mDRfontGIK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    window.location.reload();
  };

  return (
    <div className="h-full my-container" id="contact">
      <div>
        <div className="text-center my-16 md:my-32 md:mx-64">
          <p className="text-red-800">---Ask Questions---</p>
          <h3 className="md:text-2xl font-bold border-purple-900 border-y-4 py-2 uppercase text-red-800">Contact Us</h3>
        </div>
        <div className="md:flex">
          <div className="text-center lg:text-left ">
            <Lottie animationData={email} loop={true} />
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="card flex-shrink-0 md:w-1/2  max-w-xl border bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  type="text"
                  name="message"
                  className="textarea textarea-bordered textarea-lg w-full max-w-xl"
                />
              </div>
              <input
                className=" text-white bg-red-800 hover:bg-purple-900 uppercase p-3 rounded-lg mt-5 hover:text-white"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
