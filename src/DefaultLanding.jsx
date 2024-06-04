// DefaultLanding.js

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const DefaultLanding = () => {
  const [isSticky, setSticky] = useState(false);

  return (
      <div className="flex h-screen overflow-hidden ">
        <div className="w-screen relative overflow-y-auto items-center overflow-x-hidden bg-white">
         <Navbar
              isSticky={isSticky}
              setSticky={setSticky}
            />
          <main>
            <div className="bg-white w-screen z-0">
              <Outlet /> {/* Main Content */}
            </div>
          </main>
          <div className="w-full">
            <Footer />
          </div>
        </div>
      </div>
  );
};

export default DefaultLanding;
