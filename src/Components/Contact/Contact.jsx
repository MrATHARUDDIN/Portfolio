import { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [Sendemail, setSendemail] = useState("");
  const [name, setName] = useState("");
  const [helpText, setHelpText] = useState("");

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

  const handleSendMessageClick = () => {
    // Show success message using SweetAlert
    Swal.fire({
      title: "Message Sent!",
      text: "Your message has been sent successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
    // Clear the form fields after sending the message
    setName("");
    setHelpText("");
    setSendemail("");
  };

  return (
    <div>
{/* Contact Form */}
<section className="mt-20">
        <h1 className="mt-20 font-bold text-3xl text-center">Contact With Me</h1>
        <form className="mt-6 flex flex-col items-center" action="#" method="POST">
          <div className="max-w-md w-full">
            <label className="text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 px-4 py-2 border rounded-lg w-full focus:outline-none focus:border-blue-400"
              placeholder="Your Name"
              required
            />
          </div>
          {/* Email */}
          <div className="max-w-md w-full">
            <label className="text-gray-600">Name</label>
            <input
              type="text"
              id="Sendemail"
              name="Sendemail"
              value={Sendemail}
              onChange={(e) => setSendemail(e.target.value)}
              className="mt-2 px-4 py-2 border rounded-lg w-full focus:outline-none focus:border-blue-400"
              placeholder="Your Email"
              required
            />
          </div>
          {/* Help */}
          <div className="max-w-md w-full mt-4">
            <label className="text-gray-600">How can I help you?</label>
            <textarea
              id="helpText"
              name="helpText"
              value={helpText}
              onChange={(e) => setHelpText(e.target.value)}
              className="mt-2 px-4 py-2 border rounded-lg w-full focus:outline-none focus:border-blue-400"
              placeholder="Enter your message..."
              required
            />
          </div>
          <button
            onClick={handleSendMessageClick}
            type="button"
            className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
          >
            SEND MESSAGE
          </button>
        </form>
      </section>
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
