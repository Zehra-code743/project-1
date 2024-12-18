"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from './Hero-section.module.css';

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here, like sending the data to a server
    // For now, just hide the form and allow CV download
    setIsFormOpen(false);
  };

  return (
    <section className="hero-section">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Left section: Text with motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="hero-heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Zehra",
                1000,
                "Web Developer",
                1000,
                "Next Js Front Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>

          <p className="hero-subheading">
            I am passionate about crafting seamless digital experiences. With a background in web and mobile development, I strive to build intuitive and beautiful designs.
          </p>
          <div className="hero-buttons">
            <Link
              href="/#contact"
              className="btn"
            >
              Hire Me
            </Link>
            <button
              onClick={() => setIsFormOpen(true)}
              className="btn mt-3"
            >
              <span className="block">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>

        {/* Right section: Image with motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hero-image-container"
          >
            <Image
              src="/image 1.jpg"
              alt="hero image"
              className="object-cover"
              width={300}
              height={300}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Form Modal for Download CV */}
      {isFormOpen && (
        <div className="form-modal">
          <div className="form-container">
            <h2>Enter Your Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userInfo.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={userInfo.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message">Message</label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  value={userInfo.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
              >
                Submit & Download CV
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
