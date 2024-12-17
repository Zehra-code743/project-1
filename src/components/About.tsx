"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from './about-section.module.css';


const AboutSection = () => {
  return (
    <section className="about-section lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Left section: Text with motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h2 className="about-heading">
            About Me
          </h2>
          <p className="about-subheading">
            I am passionate about creating beautiful and functional digital
            experiences. With expertise in web development, mobile apps, and UI/UX
            design, I help bring ideas to life with a focus on user-centric
            design. I am a beginner working with JavaScript, React, Redux, Node.js, 
            Express, PostgreSQL, HTML, CSS, and Git. I am a quick learner and always
            looking to expand my knowledge and skill set. I am a team player and
            excited to work with others to create amazing applications.
          </p>
        </motion.div>

        {/* Right section: Image with motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="about-image-container lg:w-[400px] lg:h-[400px] w-[250px] h-[250px]">
            <Image
              src="/image 2.jpg" 
              alt="About image"
              className="about-image"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
