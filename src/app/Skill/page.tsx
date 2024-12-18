import Skill from "@/components/Skill";
import React from "react";

const Page = () => {
  return (
    <div className="page-container">
      {/* Optionally wrap the Acheivement component */}
      <div className="achievement-container">
        <Skill/>
      </div>
    </div>
  );
};

export default Page;