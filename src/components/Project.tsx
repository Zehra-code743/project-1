"use client"; // Ensures the component runs on the client side

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from './Project-section.module.css';

const ProjectSection = () => {
  return (
    <section className="project-section">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        {/* Left section: Project Information with motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h2 className="project-heading">
            Featured Projects
          </h2>
          <p className="project-description">
            Explore my projects, where I showcase the best of my web and mobile development work. Each project represents my passion for creating user-friendly and functional designs.
          </p>

          {/* Projects List */}
          <div className="project-grid">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="project-card"
            >
              <Image
                src="/e-commerce.jpg" // Ensure path is correct
                alt="Project 1: E-Commerce Platform"
                className="object-cover"
                width={300}
                height={200}
              />
              <h3 className="project-card-title">Project 1: E-Commerce Platform</h3>
              <p className="project-card-description">
                A fully responsive e-commerce platform built with React and Node.js, focused on providing seamless shopping experiences.
              </p>
              <Link href="/project1" className="project-link">
                Learn More
              </Link>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="project-card"
            >
              <Image
                src="/Mobile app.png" // Ensure path is correct
                alt="Project 2: Mobile App"
                className="object-cover"
                width={300}
                height={200}
              />
              <h3 className="project-card-title">Project 2: Mobile App</h3>
              <p className="project-card-description">
                A mobile app developed for iOS and Android to track fitness goals, using React Native and Firebase.
              </p>
              <Link href="/project2" className="project-link">
                Learn More
              </Link>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="project-card"
            >
              <Image
                src="/Portfolio website.jpg" // Ensure path is correct
                alt="Project 3: Portfolio Website"
                className="object-cover"
                width={300}
                height={200}
              />
              <h3 className="project-card-title">Project 3: Portfolio Website</h3>
              <p className="project-card-description">
                A personal portfolio website built with Next.js to showcase my web development skills and projects.
              </p>
              <Link href="/project3" className="project-link">
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right section: Image with motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
