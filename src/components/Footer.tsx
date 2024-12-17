"use client"; // Ensures the component runs on the client side

import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Example icons
import Link from "next/link";
import styles from './Footer-section.module.css';

const FooterSection = () => {
  return (
    <footer className="footer-section py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Footer Text */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="footer-heading"
          >
            Let's Connect
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="footer-description"
          >
            I would love to hear from you. Feel free to reach out via any of the following:
          </motion.p>

          {/* Social Media Icons */}
          <div className="social-icons mb-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="https://twitter.com/yourhandle" target="_blank">
                <FaTwitter className="social-icon hover:text-primary-500" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="https://linkedin.com/in/yourprofile" target="_blank">
                <FaLinkedin className="social-icon hover:text-primary-500" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="https://github.com/yourgithub" target="_blank">
                <FaGithub className="social-icon hover:text-primary-500" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="mailto:your-email@example.com">
                <FaEnvelope className="social-icon hover:text-primary-500" />
              </Link>
            </motion.div>
          </div>

          {/* Copyright Notice */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="footer-copyright"
          >
            © 2024 Zehra. All Rights Reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
