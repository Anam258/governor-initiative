import Link from "next/link";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTiktok,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"; // Importing social media icons from FontAwesome

function Footer() {
  return (
    <div className="bg-gray-100 w-full flex justify-center items-center mt-0 py-8">
      {/* Main container with a light gray background, full width, and centered content */}
      <div className="w-[90%] flex flex-col md:flex-row justify-between items-start">
        {/* Inner container that adjusts layout for mobile and desktop */}

        {/* Core Courses Section */}
        <div className="sm:p-4 md:w-1/3">
          <ul>
            <li>
              <h1 className="font-bold text-lg pb-4">Core Courses</h1>
              {/* Title for Core Courses section */}
            </li>
            <li className="pb-2">
              <Link href="#">Programming Fundamentals</Link>
              {/* Link to Programming Fundamentals course */}
            </li>
            <li className="pb-2">
              <Link href="#">Web2 Using NextJS</Link>
              {/* Link to Web2 Using NextJS course */}
            </li>
            <li>
              <Link href="#">Earn as You Learn</Link>
              {/* Link to Earn as You Learn course */}
            </li>
          </ul>
        </div>

        {/* Advanced Courses Section */}
        <div className="sm:p-4 md:w-1/3">
          <ul>
            <li>
              <h1 className="font-bold text-lg pb-4">Advanced Courses</h1>
              {/* Title for Advanced Courses section */}
            </li>
            <li className="pb-2">
              <Link href="#">Web 3 and Metaverse</Link>
              {/* Link to Web 3 and Metaverse course */}
            </li>
            <li className="pb-2">
              <Link href="#">Cloud-Native Computing</Link>
              {/* Link to Cloud-Native Computing course */}
            </li>
            <li className="pb-2">
              <Link href="#">
                Artificial Intelligence (AI) and Deep Learning
              </Link>
              {/* Link to Artificial Intelligence and Deep Learning course */}
            </li>
            <li className="pb-2">
              <Link href="#">Ambient Computing and IoT</Link>
              {/* Link to Ambient Computing and IoT course */}
            </li>
            <li className="pb-2">
              <Link href="#">Genomics and Bioinformatics</Link>
              {/* Link to Genomics and Bioinformatics course */}
            </li>
            <li>
              <Link href="#">Network Programmability and Automation</Link>
              {/* Link to Network Programmability and Automation course */}
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="sm:p-4 md:w-1/3">
          <h1 className="font-bold text-lg pb-4">Social Links</h1>
          {/* Title for Social Links section */}

          {/* List of social media icons */}
          <ul className="list-none flex space-x-4 mb-4">
            <li>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-blue-700 text-2xl transition duration-200 ease-out hover:scale-105"
                />
                {/* LinkedIn icon with hover effect */}
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="text-black text-2xl transition duration-200 ease-out hover:scale-105"
                />
                {/* TikTok icon with hover effect */}
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-blue-500 text-2xl transition duration-200 ease-out hover:scale-105"
                />
                {/* Facebook icon with hover effect */}
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-green-500 text-2xl transition duration-200 ease-out hover:scale-105"
                />
                {/* WhatsApp icon with hover effect */}
              </Link>
            </li>
          </ul>

          {/* Contact Information */}
          <p className="text-gray-700 text-sm">
            Gmail:{" "}
            <a
              href="mailto:giac@gmail.com"
              className="font-bold text-blue-600 hover:underline"
            >
              education@governorsindh.com
            </a>
            {/* Email address with a link */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
