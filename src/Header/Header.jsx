import { useState, useEffect } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "./themeToggel";

const Header = ({ getApp, FirstName, LastName, Logo, LogoBlack }) => {
  const [theme, setTheme] = useState("black");
  const [otherTheme, setOtherTheme] = useState("white");
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle theme change
  const getTheme = (theme) => {
    setTheme(theme);
    setOtherTheme(theme === "black" ? "white" : "black");
    getApp(theme);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navigation links
  const navLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Work", url: "/work" },
    { name: "Contact", url: "/contact" }
  ];

  // Social links
  const socialLinks = [
    { 
      icon: FaFacebook, 
      url: "https://web.facebook.com/saad.daas.9484",
      ariaLabel: "Facebook Profile" 
    },
    { 
      icon: FaLinkedin, 
      url: "https://www.linkedin.com/in/saad-es-safryouy-171930176/",
      ariaLabel: "LinkedIn Profile" 
    },
    { 
      icon: FaGithub, 
      url: "https://github.com/maz-s3d3",
      ariaLabel: "GitHub Profile" 
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full mt-10 px-4">
      <div
        className={`
          w-11/12 max-w-7xl mx-auto rounded-full flex justify-between items-center
          transition-all duration-300 py-3
          ${scrolled ? "shadow-lg" : ""}
          ${theme === "black" ? "bg-white text-black" : "bg-black text-white"}
        `}
      >
        {/* Left Section - Logo & Name */}
        <div className="flex items-center space-x-2 pl-3">
          <a 
            href="/" 
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
            aria-label="Go to homepage"
          >
            <div className="w-10 h-10 overflow-hidden rounded-full">
              <img
                className="w-full h-full object-cover transition-opacity duration-300"
                src={theme === "black" ? LogoBlack : Logo}
                alt={`${FirstName} ${LastName} logo`}
              />
            </div>
            <h2 className="text-lg font-bold tracking-tight">
              <span className="opacity-90">{FirstName}</span>{" "}
              <span className="opacity-100">{LastName}</span>
            </h2>
          </a>
        </div>

        {/* Center Section - Navigation */}
        <nav className="hidden md:flex items-center justify-center">
          <ul className="flex space-x-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  onClick={() => setActiveLink(link.name)}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                    ${activeLink === link.name 
                      ? `${theme === "black" ? "bg-black text-white" : "bg-white text-black"}`
                      : "hover:bg-gray-100 hover:bg-opacity-20"
                    }
                  `}
                >
                  {link.name}
                  {activeLink === link.name && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-current" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section - Theme Toggle & Social */}
        <div className="flex items-center space-x-1 pr-3">
          <div className="mr-2">
            <ThemeToggle fun={getTheme} />
          </div>

          <div className="hidden sm:flex items-center space-x-1">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className={`
                  p-2 rounded-full transition-all duration-300 hover:scale-110
                  ${theme === "black" 
                    ? "hover:bg-gray-200" 
                    : "hover:bg-gray-800"
                  }
                `}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`w-full h-0.5 rounded-full transform transition-all duration-300 ${theme === "black" ? "bg-black" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
              <span className={`w-full h-0.5 rounded-full transition-opacity duration-300 ${theme === "black" ? "bg-black" : "bg-white"} ${menuOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`w-full h-0.5 rounded-full transform transition-all duration-300 ${theme === "black" ? "bg-black" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden fixed inset-0 bg-opacity-95 z-40 transition-all duration-300 transform
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          ${theme === "black" ? "bg-white text-black" : "bg-black text-white"}
        `}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  onClick={() => {
                    setActiveLink(link.name);
                    setMenuOpen(false);
                  }}
                  className={`
                    text-2xl font-medium transition-all duration-300
                    ${activeLink === link.name 
                      ? "underline underline-offset-8" 
                      : ""}
                  `}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex space-x-6 mt-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className="p-2 transition-transform duration-300 hover:scale-125"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;