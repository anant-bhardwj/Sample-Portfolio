import React, { useState } from "react";
import location from "../assets/contact/location.png";
import mail from "../assets/contact/mail.png";
import mobile from "../assets/contact/mobile.png";

const Contact = () => {
  //State for form fields
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  //state for error messages
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
  });

  //State for a confirmation message to be visible on submission of message
  const [isSubmitted, setIsSubmitted] = useState(false);

  //handle change in form fields
  const handleChange = (e) => {
    const { name, value } = e.target; //get the name-value pair from input
    setFormData({ ...formData, [name]: value }); //expand the existing form data and add into it
  };

  //Validate the form
  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    if (!formData.fullName.trim()) {
      //if theres no name, send error
      newErrors.fullName = "Full Name is required";
      formIsValid = false;
    }

    if (!formData.email.trim()) {
      //if theres no email, send error
      newErrors.email = "Email is required";
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      //if the email is not in the valid format, send error
      newErrors.email = "Email is not valid";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully", formData); //Display form data on console

      setIsSubmitted(true);

      //clearing the form fields after successful submission
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });

      //clearing the errors after successful submission
      setErrors({
        fullName: "",
        email: "",
      });
      setTimeout(() => setIsSubmitted(false), 3000); //A confirmation message visible for 3 seconds
    }
  };

  return (
    <div
      id="contact"
      className="px-[100px] flex flex-grow justify-between w-full h-[760px]"
    >
      {/* Leave information */}
      <div className="w-[846px] h-full">
        {isSubmitted && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Your message has been sent successfully!
          </div>
        )}
        <h1 className="text-[32px] font-bold tracking-wide pb-9">
          Leave ME Your Info
        </h1>
        <div className="w-[full] bg-white px-8 py-5 tracking-wide h-[673px]">
          {/* FORM BEGINS */}
          <form onSubmit={handleSubmit}>
            {/* 
            GIVE FULL NAME */}
            <div className="form-control pb-2">
              <label className="text-lg label text-customGrey">
                Your Full Name(Required)
                {errors.fullName && (
                  <span className="text-red-500 text-xs italic mt-2">
                    {errors.fullName}
                  </span>
                )}
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="input w-[full] bg-[#F0F0F6]"
              />
            </div>
            {/* 
            GIVE EMAIL */}
            <div className="form-control mb-2">
              <label className="text-lg label text-customGrey">
                Your Email(Required)
                {errors.email && (
                  <p className="text-red-500 text-xs italic mt-2">
                    {errors.email}
                  </p>
                )}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input w-[full] bg-[#F0F0F6]"
              />
            </div>

            {/* 
            GIVE SUBJECT */}
            <div className="form-control mb-2">
              <label className="text-lg label text-customGrey">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="input w-[full] bg-[#F0F0F6]"
              />
            </div>

            {/* 
            GIVE MESSAGE */}
            <div className="form-control">
              <label className="text-lg label text-customGrey">
                Your Message
              </label>
              <textarea
                rows={7}
                value={formData.message}
                onChange={handleChange}
                name="message"
                className="w-[full] textarea bg-[#F0F0F6]"
              />
            </div>
            <div className="mt-5">
              {/* 
              SUBMIT BUTTON*/}
              <button
                type="submit"
                className="bg-customYellow px-5 py-4 rounded-md flex items-center text-sm font-bold"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact Information */}
      <div className="w-[372px] h-full">
        <h1 className="text-[34px] font-bold pb-9">Contact Information</h1>
        <div className="flex flex-col justify-between">
          {/* Address card */}
          <div className="bg-white w-[372px] h-[211px] mb-5">
            <div className="flex flex-col pt-7 px-6 items-center">
              <div>
                <img
                  src={location}
                  className="bg-customYellow rounded-full p-3"
                />
              </div>
              <div className="pt-7 w-full flex flex-col justify-between">
                <div className="flex justify-between pb-3">
                  <div className="text-lg text-customGrey">Country:</div>
                  <div className="text-customGrey text-[15px]">Bangladesh</div>
                </div>
                <div className="flex justify-between pb-3">
                  <div className="text-lg text-customGrey">City:</div>
                  <div className="text-customGrey  text-[15px]">Dhaka</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-lg text-customGrey">Street:</div>
                  <div className="text-customGrey text-[15px]">
                    35 Vhatara, Badda
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Email card */}

          <div>
            <div className="bg-white w-[372px] h-[211px]  mb-5">
              <div className="flex flex-col pt-7 px-6 items-center">
                <div>
                  <img
                    src={mail}
                    className="bg-customYellow rounded-full p-3"
                  />
                </div>
                <div className="pt-7 w-full flex flex-col justify-between">
                  <div className="flex justify-between pb-3">
                    <div className="text-lg text-customGrey">Email:</div>
                    <div className="text-customGrey text-[15px]">
                      Youremail@Gmail.com
                    </div>
                  </div>
                  <div className="flex justify-between pb-3">
                    <div className="text-lg text-customGrey">Skype:</div>
                    <div className="text-customGrey  text-[15px]">
                      @Yourusername
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-lg text-customGrey">Telegram:</div>
                    <div className="text-customGrey text-[15px]">
                      @Yourusername
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile card */}

          <div className="bg-white w-[372px] h-[211px]">
            <div className="flex flex-col pt-7 px-6 items-center">
              <div>
                <img
                  src={mobile}
                  className="bg-customYellow rounded-full p-3"
                />
              </div>
              <div className="pt-7 w-full flex flex-col justify-between">
                <div className="flex justify-between pb-3">
                  <div className="text-lg text-customGrey">
                    Support Service:
                  </div>
                  <div className="text-customGrey text-[15px]">15369</div>
                </div>
                <div className="flex justify-between pb-3">
                  <div className="text-lg text-customGrey">Office:</div>
                  <div className="text-customGrey  text-[15px]">
                    +58 021356 587 235
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-lg text-customGrey">Personal:</div>
                  <div className="text-customGrey text-[15px]">
                    +58 021356 587 235
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
