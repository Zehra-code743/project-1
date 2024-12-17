import Contact from "@/components/Contact";
import React from "react";

const Page = () => {
  return (
    <div className="page-container">
      {/* Optionally, wrap the Contact component in a styled container */}
      <div className="contact-container">
        <Contact />
      </div>
    </div>
  );
};

export default Page;
