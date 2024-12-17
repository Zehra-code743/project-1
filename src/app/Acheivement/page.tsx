import Acheivement from "@/components/Acheivement";
import React from "react";

const Page = () => {
  return (
    <div className="page-container">
      {/* Optionally wrap the Acheivement component */}
      <div className="achievement-container">
        <Acheivement />
      </div>
    </div>
  );
};

export default Page;
