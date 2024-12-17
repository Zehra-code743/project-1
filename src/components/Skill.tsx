"use client"; // Ensures the component runs on the client side

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from './Skill-section.module.css';

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        {/* Left section: Skills information with motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h2 className="skills-heading">
            My Skills
          </h2>
          <p className="skills-description">
            Over the years, I have honed my skills in a variety of web and mobile development technologies. Below are some of the key tools and technologies I work with.
          </p>

          {/* Skills list */}
          <div className="skills-grid">
            {/* Skill 1: JavaScript */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="skill-card"
            >
              <div>
                <Image
                  src="/javascript.png" // Replace with your JavaScript icon/image
                  alt="JavaScript"
                  width={400}
                  height={200}
                />
              </div>
              <div>
                <h3 className="skill-card-title">JavaScript</h3>
                <p className="skill-card-description">
                  I have extensive experience with JavaScript, building interactive web applications with React and other JS frameworks.
                </p>
              </div>
            </motion.div>

            {/* Skill 2: React */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="skill-card"
            >
              <div>
                <Image
                  src="/react.jpg" // Replace with your React icon/image
                  alt="React"
                  width={600}
                  height={200}
                />
              </div>
              <div>
                <h3 className="skill-card-title">React</h3>
                <p className="skill-card-description">
                  React is my go-to framework for building efficient and responsive front-end web applications.
                </p>
              </div>
            </motion.div>

            {/* Skill 3: UI/UX Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="skill-card"
            >
              <div>
                <Image
                  src="/ui.jpg" // Replace with your UI/UX Design icon/image
                  alt="UI/UX Design"
                  width={600}
                  height={200}
                />
              </div>
              <div>
                <h3 className="skill-card-title">UI/UX Design</h3>
                <p className="skill-card-description">
                  I have a keen eye for design and enjoy creating intuitive user interfaces and seamless experiences.
                </p>
              </div>
            </motion.div>

            {/* Skill 4: Mobile Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="skill-card"
            >
              <div>
                <Image
                  src="/Mobile development.jpg" // Replace with your React Native icon/image
                  alt="Mobile Development"
                  width={600}
                  height={200}
                />
              </div>
              <div>
                <h3 className="skill-card-title">Mobile Development</h3>
                <p className="skill-card-description">
                  I specialize in building mobile applications using React Native, ensuring a smooth experience across platforms.
                </p>
              </div>
            </motion.div>

            {/* Skill 5: Node.js */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="skill-card"
            >
              <div>
                <Image
                  src="/Node js.png" // Replace with your Node.js icon/image
                  alt="Node.js"
                  width={600}
                  height={200}
                />
              </div>
              <div>
                <h3 className="skill-card-title">Node.js</h3>
                <p className="skill-card-description">
                  I have experience in building robust back-end services with Node.js and Express, creating efficient server-side applications.
                </p>
              </div>
            </motion.div>

            {/* Skill 6: Firebase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="skill-card"
            >
              <div>
                <Image
                  src="/FireBase.png" // Replace with your Firebase icon/image
                  alt="Firebase"
                  width={600}
                  height={200}
                />
              </div>
              <div>
                <h3 className="skill-card-title">Firebase</h3>
                <p className="skill-card-description">
                  Firebase helps me with cloud-based databases and user authentication in my mobile and web applications.
                </p>
              </div>
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
          {/* Any additional content or image can go here */}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

