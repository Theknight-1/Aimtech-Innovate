"use client";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const contactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    designation: "",
    businessEmail: "",
    mobileNumber: "",
    country: "Nepal",
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
    console.log(formData);
    // Reset form fields
    setFormData({
      fullName: "",
      designation: "",
      businessEmail: "",
      mobileNumber: "",
      country: "Nepal",
      company: "",
      howDidYouKnow: "",
    });
  };
  return (
    <section className="w-full h-full">
      <div className="flex h-full flex-col lg:flex-row mt-10   ">
        <div className="flex-1 flex  justify-center h-auto p-2 ">
          <div className="w-[70%] space-y-10 p-5">
            <h1 className="text-white text-[3rem] font-semibold">
              Contact us to drive your CX & EX at scale
            </h1>
            <p className="text-white text-xl leading-loose">
              Aimtech Innovate offers premier digital marketing services at
              unbeatable rates in the US and Canada, thanks to our partnership
              with Nepal's Next Coach Incubator Program. Access top-quality work
              at a fraction of the cost.
            </p>
            <div className="space-y-5">
              <p className="flex items-center gap-6 text-white text-2xl">
                <span>
                  <FaCheckCircle />
                </span>{" "}
                Efficient and Timely Completion
              </p>
              <p className="flex items-center gap-6 text-white text-2xl">
                <span>
                  <FaCheckCircle />
                </span>{" "}
                Accuracy and Relevancy
              </p>
              <p className="flex items-center gap-6 text-white text-2xl">
                <span>
                  <FaCheckCircle />
                </span>{" "}
                Efficient and Timely Completion
              </p>
              <p className="flex items-center gap-6 text-white text-2xl">
                <span>
                  <FaCheckCircle />
                </span>{" "}
                Accuracy and Relevancy
              </p>
              <p className="flex items-center gap-6 text-white text-2xl">
                <span>
                  <FaCheckCircle />
                </span>{" "}
                Efficient and Timely Completion
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center h-full ">
          <div className="bg-white rounded-[4rem] space-y-5 w-[90%] p-16">
            <h1 className="text-4xl font-bold">Contact Page</h1>
            <p className="font-bold">
              Aimtech Innovate offers premier digital marketing services at
              unbeatable rates in the US and Canada, thanks to our partnership
              with Nepal's Next Coach Incubator Program. Access top-quality work
              at a fraction of the cost.
            </p>
            <div>
              <form onSubmit={handleSubmit} className="p-4">
                <div className="mb-4">
                  <label className="block font-medium text-black text-xl">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md text-xl"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-black text-xl">
                    Designation
                  </label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-black text-xl">
                    Business Email
                  </label>
                  <input
                    type="email"
                    name="businessEmail"
                    value={formData.businessEmail}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-black text-xl">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-black text-xl">
                    Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  >
                    <option value="Nepal">Nepal</option>
                    {/* Add more country options here */}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-black text-xl">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-black text-xl">
                    How did you know about us?
                  </label>
                  <textarea
                    name="howDidYouKnow"
                    value={formData.howDidYouKnow}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black w-full font-medium py-4 px-4 rounded-md transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contactPage;
