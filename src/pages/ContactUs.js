import React, { useState } from "react";
import { MapPin, Phone, Mail } from "react-feather"; // Import icons for contact information
import NavBar from "../components/NavBar";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <NavBar />
      <div className="bg-black text-white py-12 min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-[1px] border-gray-300 rounded-lg outline-none text-white w-full py-2 px-3"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-[1px] border-gray-300 rounded-lg outline-none text-white w-full py-2 px-3"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="bg-transparent border-[1px] border-gray-300 rounded-lg outline-none text-white w-full py-2 px-3"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-cOrange py-3 px-6 rounded-lg text-lg text-white hover:bg-opacity-80 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="text-cOrange mr-3" size={24} />
                <div>
                  <p className="text-lg font-semibold">Visit Us</p>
                  <p className="text-gray-400">123 Fitness Street, Rawalpindi</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-cOrange mr-3" size={24} />
                <div>
                  <p className="text-lg font-semibold">Call Us</p>
                  <p className="text-gray-400">+123 456 7890</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="text-cOrange mr-3" size={24} />
                <div>
                  <p className="text-lg font-semibold">Email Us</p>
                  <a
                    href="mailto:umairniaziofficial@gmail.com"
                    className="text-gray-400 cursor-pointer"
                  >
                    umairniaziofficial@gmail.com
                  </a>
                </div>
              </div>
              {/* Google Maps iframe */}
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    title="NizzFit Location"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Service Road E-9 / E-8, Islamabad, Pakistan, E-9, Islamabad, Islamabad Capital Territory 44000&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                  <a href="https://embed-googlemap.com">embed-googlemap.com</a>
                </div>
                <style>
                  {`.mapouter{position:relative;text-align:right;width:100%;height:200px;}.gmap_canvas {overflow:auto;background:none!important;width:100%;height:200px;}.gmap_iframe {width:100%!important;height:200px!important;}`}
                </style>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
