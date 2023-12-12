import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const SendEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0a61m6w', 'template_9j30mvg', form.current, 'V3ODORqf7MbJHGVLj')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          title: 'Message Sent!',
          text: 'Your message has been sent successfully.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        form.current.reset();
      })
      .catch((error) => {
        console.error(error.text);
        Swal.fire({
          title: 'Error!',
          text: 'There was an error sending your message. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });

  };

  return (
    <form className="mt-6 flex flex-col items-center" ref={form} onSubmit={sendEmail}>
      <div className="max-w-md w-full">
        <label className="text-gray-600">Name</label>
        <input
          type="text"
          id="name"
          name="user_name"
          className="mt-2 px-4 py-2 border rounded-lg w-full focus:outline-none focus:border-blue-400"
          placeholder="Name"
          required
        />
      </div>

      <div className="max-w-md w-full">
        <label className="text-gray-600">Email Address</label>
        <input
          type="email"
          id="email"
          name="user_email"
          className="mt-2 px-4 py-2 border rounded-lg w-full focus:outline-none focus:border-blue-400"
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="max-w-md w-full">
        <label className="text-gray-600">Message</label>
        <textarea
          id="message"
          name="message"
          className="mt-2 px-4 py-2 border rounded-lg w-full focus:outline-none focus:border-blue-400"
          placeholder="Message"
          required
        />
      </div>

      <input type="submit" className="btn btn-primary mt-5 w-32" value="Send" />
    </form>
  );
};

export default SendEmail;
