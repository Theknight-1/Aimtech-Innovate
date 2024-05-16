"use client";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    designation: "",
    businessEmail: "",
    mobileNumber: "",
    country: "",
    services: "",
    company: "",
    howDidYouKnow: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    const message = { ...formData };
    // Here you can perform actions with formData, like submitting it to a server
    emailjs
      .send(
        "service_g79hhi5",
        "template_1ns7gma",
        { message: JSON.stringify(message) },
        "TTp0Vsx20RoZKcD4I"
      )
      .then(
        () => {
          // setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          // Clear form data after successful submission
          // Reset form fields
          setFormData({
            fullName: "",
            designation: "",
            businessEmail: "",
            mobileNumber: "",
            country: "Nepal",
            services: "",
            company: "",
            howDidYouKnow: "",
          });
        },
        (error) => {
          // setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="w-full h-full xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 ">
      <div className="flex flex-col lg:flex-row mt-10 w-full h-full">
        <div className="flex-1 flex justify-center items-center h-[90vh] ">
          <div className="w-full lg:w-[80%] space-y-4 md:space-y-10 py-5 text-white">
            <h1 className=" text-4xl text-brand-secondary sm:text-6xl md:text-6xl lg:text-[3rem] font-semibold leading-snug ">
            Get Seen, Get Heard, Get Found Online
            </h1>
            <p className=" text-justify text-xl lg:text-2xl leading-normal">
            We are glad to see your interest in Aimtech Innovate. We are a Canada based digital marketing agency providing all kinds of digital marketing services such as SEO, Social Media Marketing, Email Marketing, PPC, Google Adwords and Facebook Ads, and Web Development. Here are 4 reasons why you should opt us as your digital marketing agency:

            </p>
            <div className="space-y-3 lg:space-y-5">
              <p className="flex items-center gap-6  text-xl lg:text-2xl">
                <span>
                  <FaCheckCircle />
                </span>{" "}
                Cost Effective Marketing Solutions
              </p>
              <p className="flex items-center gap-6  text-xl lg:text-2xl">
                <span>
                  <FaCheckCircle />
                </span>{" "}
                Less Turn-around Time
              </p>
              <p className="flex items-center gap-6  text-xl lg:text-2xl">
                <span>
                  <FaCheckCircle />
                </span>{" "}
                Commitment to transparency
              </p>

              <p className="flex items-center gap-6  text-xl lg:text-2xl">
                <span>
                  <FaCheckCircle />
                </span>{" "}
                Data-driven and personalized
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center h-full text-brand-primary">
          <div className="bg-white rounded-lg lg:rounded-[4rem] space-y-5 lg:w-[90%] p-4 md:p-8 lg:py-10 xl:p-16 ">
            <h1 className="text-2xl text-brand-secondary lg:text-4xl font-bold">Get in touch
            </h1>
            <p className="font-bold text-lg lg:text-xl">
              We always get started with a conversation to better understand your needs, so fill in your details and one of our team will be in touch with you.
            </p>
            
            <div>
              <form onSubmit={handleSubmit} className=" p-0 lg:p-4 ">
                <div className="mb-4">
                  <label className="block font-medium  text-xl">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full  rounded-md text-xl border-brand-secondary      border-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium  text-xl">
                    Designation
                  </label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full  rounded-md text-xl border-brand-secondary      border-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium  text-xl">
                    Business Email
                  </label>
                  <input
                    type="email"
                    name="businessEmail"
                    value={formData.businessEmail}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full  rounded-md text-xl border-brand-secondary      border-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium  text-xl">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full  rounded-md text-xl border-brand-secondary      border-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium  text-xl">
                    Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full  rounded-md text-xl border-brand-secondary      border-2"
                  >
                    <option value="Canada">Canada</option>
                    <option value="US">US</option>
                    <option value="Nepal">Nepal</option>{" "}
                    {/* Corrected value for Nepal */}
                    {/* Add more country options here */}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block font-medium  text-xl">
                    Services
                  </label>
                  <select
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full  rounded-md text-xl border-brand-secondary      border-2"
                  >
                    <option className="w-full" value="Web Design and Development">
                      Web Design and Development
                    </option>
                    <option className="w-full" value="Social Media Management">
                      Social Media Management
                    </option>
                    <option className="w-full" value="PPC Advertisement">PPC Advertisement</option>
                    <option className="w-full" value="Email Marketing">Email Marketing</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block font-medium  text-xl">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full  rounded-md text-xl border-brand-secondary      border-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium  text-xl">
                    How did you know about us?
                  </label>
                  <textarea
                    name="howDidYouKnow"
                    value={formData.howDidYouKnow}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 p-2 w-full  rounded-md text-xl border-brand-secondary border-2"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-brand-secondary hover:text-white  w-full font-medium py-4 px-4 rounded-md transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
              <article className="font-bold text-lg lg:text-xl">
              Need to reach us right away? Here’s where you can find us.
              <br />
              Phone
              +1 905-399-6642
              <br />
              Email
              support@aimtechinnovate.com
              <br />
              Address
              1188 settlers St. Windsor Ontario N9G2W7 Canada

            </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
