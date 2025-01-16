import { React, useContext } from "react";

import Image1 from "../img/portfolio/portfolio6.jpg";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";
import Image5 from "../img/portfolio/5.png";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { transition1 } from "../transitions";

import { CursorContext } from "../context/CursorContext";

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div
          className="flex flex-col lg:flex-row h-full
         items-center justify-start gap-x-24 text-center
          lg:text-left pt-24 lg:pt-36 pb-8 "
        >
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit<b> amet consectetur</b>, adipiscing elit.
              exercic
              <br />
              <br />
              Lorem Ipsum is Lorem Ipsum, Lore Lorem Ipsum et just consectetur,
              sed diam nonumy eirmod tempor
            </p>

            <Link
              to={"/contact"}
              className="btn mb-[30px]
            mx-auto lg:mx-0"
            >
              Hire Me
            </Link>
          </motion.div>
          {/* image grid */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="grid grid-cols-2 lg:gap-2"
          >
            {/* image */}
            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px]
            lg:h-[220px] bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px]
              hover:scale-110 transition-all duration-500"
                src={Image1}
                alt=""
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px]
            lg:h-[220px] bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px]
              hover:scale-110 transition-all duration-500"
                src={Image2}
                alt=""
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px]
            lg:h-[220px] bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px]
              hover:scale-110 transition-all duration-500"
                src={Image3}
                alt=""
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px]
            lg:h-[220px] bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px]
              hover:scale-110 transition-all duration-500"
                src={Image4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
