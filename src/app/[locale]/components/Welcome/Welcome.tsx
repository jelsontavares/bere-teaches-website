"use client";

import { Section } from "lucide-react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookF, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Welcome = () => {
  return (
    <section className="w-full max-w-full mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col items-center gap-14 md:flex-row md:gap-24">
        {/* Left Content */}
        <div className="w-full flex flex-col gap-5">
          <div className="w-full flex flex-col gap-3">
            <h1 className="text-4xl font-semibold text-slate-900 dark:text-black md:text-5xl">
              Welcome to Bere Teaches
            </h1>
            <p className="text-lg font-semibold text-slate-900 dark:text-black/90">
              Your Gateway to Mastering Languages
            </p>
            <p className="text-sm mt-10 mb-10 font-normal  text-black">
              Immerse yourself in a world of languages with Bere Teaches. Our
              courses are designed to make language learning engaging and
              effective.
            </p>
                  </div>
                   {/* Buttons */}
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button className="inline-flex items-center justify-center text-white bg-secondary font-medium border-0 h-10 md:h-12 px-6 focus:outline-none hover:bg-[#FFB95D] hover:text-black rounded-lg text-base transition-colors duration-500">
          Explore Courses
        </button>
        <button className="inline-flex items-center justify-center  bg-white font-medium text-black border border-black/30 h-10 md:h-12 px-6 focus:outline-none rounded-lg hover:bg-[#FFB95D]  hover:border-0 text-base transition-colors duration-500">
              <a href="">
              More about us
          </a>
        </button>
      </div>

      {/* Social Media Icons */}
      <ul className="w-1/2 flex items-center mt-10 gap-5">
        <li>
          <button className="group w-12 h-12 flex justify-center items-center bg-[#FFB95D] rounded-full transition-all duration-300  hover:bg-secondary text-black">
            <a
              className="flex items-center justify-center"
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-2xl text-black group-hover:text-black"
              />
            </a>
          </button>
        </li>
        <li>
          <button className="group w-12 h-12 flex justify-center items-center bg-[#FFB95D] rounded-full transition-all duration-300  hover:bg-secondary text-black">
            <a
              className="flex items-center justify-center"
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-2xl text-black group-hover:text-black"
              />
            </a>
          </button>
        </li>
        <li>
          <button className="group w-12 h-12 flex justify-center items-center bg-[#FFB95D] rounded-full transition-all duration-300  hover:bg-secondary text-black">
            <a
              className="flex items-center justify-center"
              href="https://www.linekdin.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-2xl text-black group-hover:text-black"
              />
            </a>
          </button>
        </li>
      </ul>
              </div>
              {/* Right Image */}
      <div className="w-full lg:mr">
        <img
          src="/img/test.png"
          alt=""
          className="w-full h-auto bg-slate-100 rounded-lg object-cover aspect-[4/3]"
        />
      </div>
      </div>

     

      
    </section>
  );
};

export default Welcome;