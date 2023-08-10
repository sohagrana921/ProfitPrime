import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p578xaq', 'template_osftikb', form.current, '7Mvl3Q6mDRfontGIK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        window.location.reload();
    };

    return (
        <div className='lg:px-24 h-full'>
            <div>
            <h1 className='lg:text-4xl text-2xl uppercase font-bold pt-10 md:py-20 text-sky-950 text-center'>Ask a question</h1>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <form ref={form} onSubmit={sendEmail} className="card flex-shrink-0 w-full max-w-xl bg-orange-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="user_name" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="user_email" placeholder="Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" name="subject" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea type="text" name="message" className="textarea textarea-bordered textarea-lg w-full max-w-xl" />
                            </div>
                            <input className='bg-orange-700 text-white hover:bg-orange-900 p-3 rounded-lg mt-5 hover:text-white' type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;