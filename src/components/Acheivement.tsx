"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from './Acheivement-section.module.css';

const AchievementSection = () => {
  return (
    <section className="achievement-section">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Left section: Achievement Text with motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h2 className="achievement-heading">
            My Achievements
          </h2>
          <p className="achievement-subheading">
            Throughout my career, I've had the privilege of working on various
            projects that have allowed me to grow and achieve remarkable results.
            Below are some of the key milestones I've reached:
          </p>

          {/* List of Achievements */}
          <ul className="achievement-list">
            <li>Developed and launched a mobile app with over 50,000 downloads.</li>
            <li>Redesigned the user interface for a popular e-commerce platform, increasing user engagement by 40%.</li>
            <li>Contributed to a web development team that won a regional award for innovative design.</li>
            <li>Built and maintained various responsive websites for both startups and established businesses.</li>
          </ul>
        </motion.div>

        {/* Right section: Achievement Image with motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="achievement-image-container">
            <Image
              src="/Acheivement.jpg" // Ensure the path is correct
              alt="Achievement image"
              className="achievement-image"
              width={700}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementSection;
