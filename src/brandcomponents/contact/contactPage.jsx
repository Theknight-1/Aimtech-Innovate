"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const DeleteConfirmationModal = ({
  confirmation,
  setConfirmation,
}) => {
  const handleClose = () => {
    setConfirmation(!confirmation);
  };
  return (
    confirmation && (
      <div
        id="deleteModal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed inset-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5 ">
            <button
              type="button"
              className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white "
              onClick={handleClose}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <p className="mb-4 text-gray-500 dark:text-gray-300 p-3">
              Thank you. I will get back to you as soon as possible.
            </p>
            <div className="flex justify-center items-center space-x-4">
              <button
                type="submit"
                onClick={handleClose}
                className="py-2 px-3 text-sm font-medium text-center text-brand-primary  rounded-lg  bg-brand-secondary hover:bg-yellow-400"
              >
                Thank you
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    designation: "",
    companyName: "",
    service: "Select Digital Presence Services",
    phoneNumber: "",
    country: "Canada",
  });
  const [countries, setCountries] = useState([]);
  const [phoneCode, setPhoneCode] = useState("+124");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false); // State for checkbox

  useEffect(() => {
    // Fetch country data from the REST Countries API
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    const selectedCountry = countries.find(
      (country) => country.idd.root + country.idd.suffixes === countryCode
    );

    if (selectedCountry) {
      setFormData({
        ...formData,
        country: selectedCountry.name.common,
      });
      setPhoneCode(countryCode || "");
    } else {
      console.error(`Country with code ${countryCode} not found.`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isCheckboxChecked) {
      alert("Please agree to share your information.");
      return;
    }

    const message = { ...formData, phoneCode };
    setLoading(true);
    emailjs
      .send(
        "service_g79hhi5",
        "template_1ns7gma",
        { message: JSON.stringify(message) },
        "TTp0Vsx20RoZKcD4I"
      )
      .then(
        () => {
          setLoading(false);
          setConfirmation(!confirmation);
          setFormData({
            email: "",
            fullName: "",
            designation: "",
            companyName: "",
            service: "Web Design and Development",
            phoneNumber: "",
            country: "Canada",
          });
        },
        (error) => {
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <section className="w-full h-full xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 ">
        <div className="flex flex-col lg:flex-row mt-10 w-full h-full">
          <div className="flex-1 flex justify-center items-center h-[90vh] ">
            <div className="w-full lg:w-[80%] space-y-4 md:space-y-10 py-5 text-white">
              <h1 className=" text-4xl text-brand-secondary sm:text-6xl md:text-6xl lg:text-[3rem] font-semibold leading-snug ">
                Get Seen, Get Heard, Get Found Online
              </h1>
              <p className=" text-justify text-xl lg:text-2xl leading-normal">
                We are glad to see your interest in Aimtech Innovate. We are a
                Canada based digital marketing agency providing all kinds of
                digital marketing services such as SEO, Social Media Marketing,
                Email Marketing, PPC, Google Adwords and Facebook Ads, and Web
                Development. Here are 4 reasons why you should opt us as your
                digital marketing agency:
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
              <h1 className="text-2xl text-primary lg:text-4xl font-bold">
                Get in touch
              </h1>
              <p className="font-bold text-lg lg:text-xl">
                We always get started with a conversation to better understand
                your needs, so fill in your details and one of our team will be
                in touch with you.
              </p>

              <div>
                <form
                  onSubmit={handleSubmit}
                  className="max-w-full mx-auto bg-white rounded-lg space-y-10"
                >
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="fullName"
                      id="floating_first_name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="block py-2.5 px-0 w-full text-lg text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=""
                      required
                    />
                    <label
                      htmlFor="floating_first_name"
                      className="peer-focus:font-medium absolute text-lg text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Full name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group text-black">
                    <input
                      type="email"
                      name="email"
                      id="floating_email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="block py-2.5 px-0 w-full text-lg text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=""
                      required
                    />
                    <label
                      htmlFor="floating_email"
                      className="peer-focus:font-medium absolute text-lg text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email address
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="block py-2.5 px-0 w-full text-lg text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      required
                    >
                      <option
                        value="Select Digital Presence Services"
                        disabled={true}
                      >
                        Select Digital Presence Services
                      </option>
                      <option value="Web Design and Development">
                        Web Design and Development
                      </option>
                      <option value="Social Media Management">
                        Social Media Management
                      </option>
                      <option value="PPC Advertisement">
                        PPC Advertisement
                      </option>
                      <option value="Email Marketing">Email Marketing</option>
                      <option value="Search Engine Optimization">
                        Search Engine Optimization
                      </option>
                      <option value="others">Others</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-.707.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <label
                      htmlFor="service"
                      className="peer-focus:font-medium absolute text-lg text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Services
                    </label>
                  </div>
                  <div className="flex flex-col md:flex-row w-full md:gap-6">
                    <div className="relative z-0 md:w-[70%] w-full  group">
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleCountryChange}
                        className="block py-2.5 px-0 w-full text-lg text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        required
                      >
                        <option value={formData?.country}>
                          {formData?.country}
                        </option>
                        {countries.map((country) => (
                          <option
                            key={
                              country?.idd?.root +
                              country?.idd?.suffixes +
                              country?.name.official
                            }
                            value={country?.idd?.root + country?.idd?.suffixes}
                          >
                            {country?.name?.common}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg
                          className="h-5 w-5 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-.707.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <label
                        htmlFor="country"
                        className="peer-focus:font-medium absolute text-lg text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Country
                      </label>
                    </div>

                    <div className="relative z-0 md:w-[30%] w-full mt-5 md:mt-0 mb-5 md:mb-0 group">
                      <input
                        type="tel"
                        name="phoneNumber"
                        id="floating_phone_number"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="block py-2.5 px-0 w-full text-lg text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=""
                        required
                      />

                      <label
                        htmlFor="floating_phone_number"
                        className="peer-focus:font-medium absolute text-lg text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Phone number
                      </label>
                    </div>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="companyName"
                      id="floating_company_name"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="block py-2.5 px-0 w-full text-lg text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=""
                    />
                    <label
                      htmlFor="floating_company_name"
                      className="peer-focus:font-medium absolute text-lg text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Company name <span className="text-sm">(optional)</span>
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group flex items-center gap-5">
                    <input
                      type="checkbox"
                      className="w-5 h-5"
                      onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}
                      checked={isCheckboxChecked}
                    />
                    <p className="text-black text-lg">
                      I agree to share my above information for Aimtech
                      Marketing and Promotional activities
                    </p>
                  </div>
                  <div className="flex ">
                    <button
                      type="submit"
                      disabled={!isCheckboxChecked} // Disable button if checkbox is not checked
                      className={`bg-[#FFA300] hover:bg-yellow-400 transition-opacity text-[#122B59] font-semibold w-full py-3 rounded text-lg flex justify-center ${
                        !isCheckboxChecked
                          ? "cursor-not-allowed opacity-50"
                          : ""
                      }`}
                    >
                      {loading ? (
                        <div className="animate-spin h-7 w-7  border-t-2 border-black rounded-full "></div>
                      ) : (
                        <h1>Submit</h1>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {confirmation && (
        <div className="bg-slate-900/20 backdrop-blur p-8  inset-0 z-50 grid place-items-center overflow-y-scroll  fixed w-[100vw] h-[100vh] left-0 ">
          <DeleteConfirmationModal
            confirmation={confirmation}
            setConfirmation={setConfirmation}
          />
        </div>
      )}
    </>
  );
};

export default ContactPage;
