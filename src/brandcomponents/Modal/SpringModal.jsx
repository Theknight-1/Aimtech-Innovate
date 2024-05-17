"use client";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import emailjs from "@emailjs/browser";

const ExampleWrapper = ({ isOpen, setIsOpen, selectedOption }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    designation: "",
    companyName: "",
    service: selectedOption || "Select Digital Presence Services",
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8  inset-0 z-50 grid place-items-center overflow-y-scroll  fixed w-[100vw] h-[100vh] left-0 "
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-white p-5 rounded-lg w-full max-w-3xl shadow-xl cursor-default relative overflow-hidden "
          >
            <span
              className="absolute z-10  text-black md:right-5 right-2 md:top-5 top-5 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <IoCloseSharp  size={30} />
            </span>
            <div className=" space-y-4">
              <h1 className="text-black text-center text-5xl font-bold">
                Request a Proposal
              </h1>
              <p className="text-black text-center">
                Just fill in the form, and let our experts handle the rest.
                Here’s what will happen next:
              </p>
            </div>
            <div className="relative p-5">
              <form
                onSubmit={handleSubmit}
                className="max-w-full mx-auto bg-white rounded-lg md:space-y-8 space-y-5"
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
                    <option value="Select Digital Presence Services">
                    Select Digital Presence Services
                    </option>
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
                <div className="flex flex-col md:flex-row w-full md:gap-6 ">
                  <div className="relative z-0 md:w-[30%] w-full  group">
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
                  <div className="relative z-0 md:w-[60%] w-full mt-5 md:mt-0 md:mb-0  group">
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
                <div className="relative z-0 w-full mb-5  group">
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
                    className="w-5 h-5"
                    onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}
                    checked={isCheckboxChecked}
                  />
                  <p className="text-black md:text-lg text-sm">
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
                      <h1>Get My Custom Quote</h1>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExampleWrapper;
