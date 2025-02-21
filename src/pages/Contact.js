import { React, useContext } from "react";

import WomanImg from "../img/contact/JoshuaContact.jpg";

import { motion } from "framer-motion";

import { transition1 } from "../transitions";

import { CursorContext } from "../context/CursorContext";

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section bg-white"
    >
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col lg:flex-row h-full
        items-center justify-start pt-36 gap-x-8 text-center 
        lg:text-left"
        >
          {/* bg */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="hidden lg:flex bg-[#eef7f9] absolute
          bottom-0 left-0 right-0 top-72 -z-10"
          ></motion.div>
          {/* text & form */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="lg:flex-1 lg:pt-32 px-4"
          >
            <h1 className="h1">Contact me</h1>
            <p className="mb-12">I would love to get suggestions from you.</p>
            <form className="flex flex-col gap-y-6">
              {/* Name and Email */}
              <div className="flex flex-row gap-4">
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent
                 font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your name"
                  aria-label="Your name"
                />
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent
                 font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="email"
                  placeholder="Your email address"
                  aria-label="Your email address"
                />
              </div>
              {/* Message */}
              <textarea
                className="outline-none border-b border-b-primary h-[120px] bg-transparent
               font-secondary w-full pl-3 pt-3 placeholder:text-[#757879] resize-none"
                placeholder="Your message"
                aria-label="Your message"
              ></textarea>
              {/* Button */}
              <button className="btn mx-auto lg:mx-0 self-start">
                Send it
              </button>
            </form>
          </div>
          {/* image */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ transition: transition1, duration: 1.5 }}
            className="lg:flex-1"
          >
            <img
              src={WomanImg}
              alt="Contact form illustration"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
