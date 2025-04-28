import { useState } from "react";

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "./themeToggel";
import clsx from "clsx"; // Install clsx with `npm install clsx`

const Header = ({getApp,FirstName,LastName,Logo,LogoBlack}) => {

  const [Theme, setTheme] = useState("black");
  const [OtherTheme, setOtherTheme] = useState("white");

  const getTheme = (theme) => {
    setTheme(theme);
    setOtherTheme(theme === "black" ? "white" : "black");
    getApp(theme)
  };
  console.log(Theme)
  console.log(OtherTheme)

  return (
    <>
      <div
        className={clsx(
          "w-10/12 z-50 mb-3 top-10 mx-auto rounded-full h-14 flex justify-between fixed border transition-colors",
          `bg-${OtherTheme}`,
          `text-${Theme}`

        )}
      >
        {/* Left Section */}
        <div className="flex ml-2">
          <a href="/" className="flex my-auto justify-around">
            <img
              className="max-w-14 my-auto mx-4 rounded-3xl"
              src={Theme === "black" ? LogoBlack : Logo}
              alt="Logo"
            />
            <h2 className="my-auto">
              {FirstName} {LastName}
            </h2>
          </a>
        </div>

        {/* Center Section */}
        <div className="flex my-auto mr-10 justify-between">
          <a href="/">
            <h3 className="mx-3">Home</h3>
          </a>
          <a href="/">
            <h3 className="mx-3">About</h3>
          </a>
          <a href="/">
            <h3 className="mx-3">Work</h3>
          </a>
          <a href="/">
            <h3 className="mx-3">Contact</h3>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex">
          {/* Theme Toggle */}
          <button className="mx-2">
            <ThemeToggle fun={getTheme} />
          </button>

          {/* Social Icons */}
          <div className="flex my-auto mr-5 justify-between">
            <a
              href="https://web.facebook.com/saad.daas.9484"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FaFacebook size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/saad-es-safryouy-171930176/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/maz-s3d3"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
      </>
  );
};

export default Header;
