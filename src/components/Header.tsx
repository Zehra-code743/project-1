"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './Header-section.module.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container mx-auto flex items-center justify-between">
        <div className="logo-container">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/profile picture.jpg" 
              alt="Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="nav-list">
            <li>
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/About" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link href="/Acheivement" className="nav-link">
                Achievement
              </Link>
            </li>
            <li>
              <Link href="/Project" className="nav-link">
                Project
              </Link>
            </li>
            <li>
              <Link href="/Skill" className="nav-link">
                Skill
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
