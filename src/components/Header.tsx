"use client"; // This directive ensures the component is client-side rendered in Next.js
import Image from "next/image"; // Importing Image component from Next.js for optimized images
import image from "../../public/logo.jpg"; // Importing the logo image
import Link from "next/link"; // Importing Link component for client-side navigation
import { useState } from "react"; // Importing useState for managing the mobile menu's open/close state

function Header() {
  const [open, setOpen] = useState(false); // State to track whether the mobile menu is open or closed
  const toggle = () => {
    setOpen(!open); // Function to toggle the mobile menu's state
  };

  return (
    <header className="bg-[#044e83] fixed top-0 left-0 flex z-50 justify-between items-center w-full h-[80px] p-4 md:p-3 shadow-lg">
      {/* Logo Section */}
      <div className="flex-shrink-0 ml-10 mb-0">
        <Image
          src={image}
          width={70}
          height={80}
          alt="logo" // Accessible description for the logo
          className="w-[70px] h-auto"
        />
      </div>

      {/* Title Section */}
      <div className="flex-1 text-center">
        <h3
          className="font-sans font-bold text-lg md:text-2xl"
          style={{ color: "#b9d8f3" }} // Inline style for text color
        >
          Tuition Free Education Program on Latest Technologies
        </h3>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button className="text-white block md:hidden" onClick={toggle}>
        ☰ {/* Hamburger menu icon for mobile */}
      </button>

      {/* Navigation Menu */}
      <nav
        className={`${
          open ? "block" : "hidden" // Conditionally render the mobile menu
        } md:flex w-full md:w-auto bg-[#044e83] md:bg-transparent absolute md:static top-[100%] left-0 md:top-auto z-40 transition-all duration-300`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-6 p-4 md:p-0 text-white font-medium">
          {/* Navigation Links */}
          <li>
            <Link href="/">Home</Link> {/* Links to the Home page */}
          </li>
          <li>
            <Link href="/apply">Apply</Link> {/* Links to the Apply page */}
          </li>
          <li>
            <Link href="/jobs">Jobs</Link> {/* Links to the Jobs page */}
          </li>
          <li>
            <Link href="/result">Result</Link> {/* Links to the Result page */}
          </li>
          <li>
            <Link href="http://localhost:3000/#courses">Courses</Link>{" "}
            {/* Links to the Courses section */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
