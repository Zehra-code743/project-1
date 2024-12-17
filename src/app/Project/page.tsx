import Project from "@/components/Project";
import React from "react";

const Page = () => {
  return (
    <div className="page-container">
      {/* Optionally wrap the Acheivement component */}
      <div className="achievement-container">
        <Project />
      </div>
    </div>
  );
};

export default Page;
