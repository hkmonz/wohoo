import React, { useState } from "react";
import { Modal } from "antd";
import "antd/dist/reset.css";
import emailjs from "emailjs-com";
interface BookDemoModalProps {
  open: boolean;
  onClose: () => void;
}

const BookDemo: React.FC<BookDemoModalProps> = ({ open, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

 const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // send email using EmailJS
    emailjs
      .send(
        "service_xrbuyhe", 
        "template_agz6e8o", 
        {
          name: name,
          email: email,
          phone: phone,
          description: desc,
        },
        "GpYcsepvqAqjfdUu-" 
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSubmitting(false);
          onClose();
          setName("");
          setEmail("");
          setPhone("");
          setDesc("");
        },
        (error) => {
          console.error("FAILED...", error.text);
          setSubmitting(false);
        }
      );
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      closeIcon={
        <span className="text-[#1D6748] hover:text-[#155c41] text-2xl font-bold">
          &times;
        </span>
      }
      styles={{
        body: {
          borderRadius: "1rem",
          padding: "1.5rem",
          background: "#fff",
        },
      }}
      width={420}
      className="!rounded-2xl"
    >
      <h2 className="text-2xl font-bold text-[#17423b] font-inter mb-6 text-center">
        Book a Demo
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          required
          placeholder="Name"
          className="w-full px-4 py-3 rounded-lg border border-[#7D58EE] focus:border-[#7D58EE] focus:ring-2 focus:ring-[#7D58EE]/20 outline-none font-inter text-[#17423b] bg-[#f9fafb] transition"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          required
          placeholder="Email"
          className="w-full px-4 py-3 rounded-lg border border-[#7D58EE] focus:border-[#7D58EE] focus:ring-2 focus:ring-[#7D58EE]/20 outline-none font-inter text-[#17423b] bg-[#f9fafb] transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      <div className="w-full">
        <input
          type="tel"
          required
          placeholder="Phone Number"
          className="w-full px-4 py-3 rounded-lg border border-[#7D58EE] focus:border-[#7D58EE] focus:ring-2 focus:ring-[#7D58EE]/20 outline-none font-inter text-[#17423b] bg-[#f9fafb] transition"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
        <textarea
          required
          placeholder="Description"
          className="w-full px-4 py-3 rounded-lg border border-[#7D58EE] focus:border-[#7D58EE] focus:ring-2 focus:ring-[#7D58EE]/20 outline-none font-inter text-[#17423b] bg-[#f9fafb] transition min-h-[100px] resize-none"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          type="submit"
          // className="w-full mt-2 px-5 py-3 bg-[#1D6748] !text-white font-inter font-semibold rounded-full shadow hover:bg-[#155c41] transition text-lg"
          className="
        bg-gradient-to-r from-[#7D58EE] to-[#2B117E]  !text-[19.2px]
        duration-500 hover:scale-105 !text-white !font-normal 
        !px-6 !py-3 !rounded-[16px] shadow transition
    "
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </Modal>
  );
};

export default BookDemo;