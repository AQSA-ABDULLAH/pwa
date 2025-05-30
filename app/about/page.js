import React from "react";
import Navbar from "../../components/Navbar";

function page() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[90vh] bg-gray-100 text-black">
        <p>WELCOME TO ABOUT US PAGE</p>
      </div>
    </div>
  );
}

export default page;
