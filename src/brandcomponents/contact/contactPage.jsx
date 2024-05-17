"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    designation: "",
    companyName: "",
    service: "Web Design and Development",
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
          alert("Thank you. I will get back to you as soon as possible.");
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
    <section className="w-full h-full xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 ">
      <div className="flex flex-col lg:flex-row mt-10 w-full h-full">
        <div className="flex-1 flex justify-center items-center h-[90vh] ">
          <div className="w-full lg:w-[80%] space-y-4 md:space-y-10 py-5 text-white">
            <h1 className=" text-4xl text-brand-secondary sm:text-6xl md:text-6xl lg:text-[3rem] font-semibold leading-snug ">
              Get Seen, Get Heard, Get Found Online
            </h1>
            <p className=" text-justify text-xl lg:text-2xl leading-normal">
              If you are a business owner and want to increase your profit, then
              contact Aim Tech Innovate. Schedule a meeting to discuss, how Aim
              Tech Innovate can help you boost your sales and revenue like
              crazy! So, tell us what you desire by filling out the form below.
              We will contact you very soon.
            </p>
            <div className="space-y-3 lg:space-y-5">
              <p className="flex items-center gap-6  text-xl lg:text-2xl">
                <span>
                  <FaCheckCircle />
                </span>{" "}
                Efficient and Timely Completion
              </p>
              <p className="flex items-center gap-6  text-xl lg:text-2xl">
                <span>
                  <FaCheckCircle />
                </span>{" "}
                Accuracy and Relevancy
              </p>
              <p className="flex items-center gap-6  text-xl lg:text-2xl">
                <span>
                  <FaCheckCircle />
                </span>{" "}
                SEO is all about improving a website's visibility on search
                engines like Google
              </p>

              <p className="flex items-center gap-6  text-xl lg:text-2xl">
                <span>
                  <FaCheckCircle />
                </span>{" "}
                Improved user experience & customer satisfaction through our
                specialized design approach.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center h-full text-brand-primary">
          <div className="bg-white rounded-lg lg:rounded-[4rem] space-y-5 lg:w-[90%] p-4 md:p-8 lg:py-10 xl:p-16 ">
            <h1 className="text-2xl text-brand-secondary lg:text-4xl font-bold">
              Get in touch
            </h1>
            <p className="font-bold text-lg lg:text-xl">
              We always get started with a conversation to better understand
              your needs, so fill in your details and one of our team will be in
              touch with you.
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
                    <option value="Web Design and Development">
                      Web Design and Development
                    </option>
                    <option value="Social Media Management">
                      Social Media Management
                    </option>
                    <option value="PPC Advertisement">PPC Advertisement</option>
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
                  <div className="relative z-0 md:w-[30%] w-full mb-5 group">
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
                  <div className="text-black md:w-[10%] w-full">
                    <h1
                      className="block py-2.5 px-0 w-full text-lg text-black
                      bg-transparent border-0 border-b-2 border-gray-300
                      appearance-none dark:text-black dark:border-gray-600
                      dark:focus:border-blue-500 focus:outline-none focus:ring-0
                      focus:border-blue-600 peer"
                      placeholder=""
                      required
                    >
                      {formData.country === "United States" ? "+1" : phoneCode}
                    </h1>
                  </div>
                  <div className="relative z-0 md:w-[60%] w-full mt-5 md:mt-0 md:mb-5 group">
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
                    required
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
                    onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}
                    checked={isCheckboxChecked}
                  />
                  <p className="text-black text-lg">
                    I agree to share my above information for Aimtech Marketing
                    and Promotional activities
                  </p>
                </div>
                <div className="flex ">
                  <button
                    type="submit"
                    disabled={!isCheckboxChecked} // Disable button if checkbox is not checked
                    className={`bg-[#FFA300] hover:bg-yellow-400 transition-opacity text-[#122B59] font-semibold w-full py-3 rounded text-lg flex justify-center ${
                      !isCheckboxChecked ? "cursor-not-allowed opacity-50" : ""
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
              <article className="font-bold text-lg lg:text-xl mt-3">
                Need to reach us right away? Here’s where you can find us.
                <br />
                Phone +1 905-399-6642
                <br />
                Email support@aimtechinnovate.com
                <br />
                Address 1188 settlers St. Windsor Ontario N9G2W7 Canada
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
