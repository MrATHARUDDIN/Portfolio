import { useRef, useState } from "react";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
import SendEmail from "./SendEmail";

const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const handleSubscribeClick = () => {
    if (!email) {
      // Show error alert if email is not entered
      Swal.fire({
        title: "Error!",
        text: "Please enter your email address.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      // If email is entered, show success alert
      setEmail("");
      Swal.fire({
        title: "Subscribed!",
        text: "You are now subscribed to our newsletter.",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
{/* Contact Form */}
 <SendEmail></SendEmail>
      {/* Newsletter */}
      <section id="newsletter" className="bg-gray-100 mb-20 mt-32 py-8">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600">Stay up to date with our latest news and updates.</p>
          </div>
          <form className="mt-6 flex flex-col items-center" action="#" method="POST">
            <div className="max-w-md w-full">
              <label className="text-gray-600">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 px-4 py-2 border rounded-lg w-full focus:outline-none focus:border-blue-400"
                placeholder="you@example.com"
                required
              />
            </div>
            <button
              onClick={handleSubscribeClick}
              type="button"
              className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
