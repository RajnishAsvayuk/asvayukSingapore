"use client";

import emailjs from "emailjs-com";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_87vr8sz",
        "template_k6nh2kz",
        form,
        "a5Sb8Lr7sTox9Curn"
      )
      .then(() => {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setForm({ name: "", email: "", phone: "", service: "", message: "" });

        setTimeout(() => setStatus({ type: "", message: "" }), 3000); // Auto-hide
      })
      .catch((err) => {
        setStatus({ type: "error", message: "Failed to send message. Try again." });
        console.log(err);

        setTimeout(() => setStatus({ type: "", message: "" }), 3000);
      });
  };

  return (
    <div className="relative">

      {/* Toast */}
      {status.message && (
        <div
          className={`fixed top-4 right-4 px-4 py-3 rounded-lg shadow-lg text-white text-sm animate-fade-in-up
            ${status.type === "success" ? "bg-success" : "bg-danger"}
          `}
        >
          {status.message}
        </div>
      )}

      <form onSubmit={sendEmail}>
        <div className="row pt-0 pb-0">
          <div className="form-group col-12 pt-4 pt-lg-0 pt-md-0">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group col-12 pt-4 pt-lg-0 pt-md-0">
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="row pt-0">
          <div className="form-group col-12 pt-4 pt-lg-0 pt-md-0">
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Mobile Number"
            />
          </div>
        </div>

        <div className="form-row message-group w-100 pb-0 pb-lg-4 pb-md-4">
          <div className="form-group col-lg-12 py-3 py-lg-0 py-md-0">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="form-control"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-12">
            <button type="submit" className="submit_btn">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
