import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState, useRef } from "react";
import clsx from "clsx";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const hoverTimeoutRef = useRef(null);
  const [consultClicked, setConsultClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServicesMouseEnter = () => {
    clearTimeout(hoverTimeoutRef.current);
    setServicesHover(true);
  };

  const handleServicesMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setServicesHover(false);
    }, 200);
  };

  const isServicesVisible = servicesOpen || servicesHover;

  const navItems = [
    { id: "about-us", title: "About Us" },
    { id: "services", title: "Services" },
    { id: "case-studies", title: "Case Studies" },
    { id: "careers", title: "Careers" },
    { id: "news", title: "News" },
    { id: "contact", title: "Contact" },
  ];

  const NavLink = ({ title, onClick }) => (
    <LinkScroll
      onClick={() => {
        setIsOpen(false);
        if (onClick) onClick();
      }}
      to={title.toLowerCase().replace(/\s/g, "-")}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold text-p4 transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-0"
    >
      {title}
    </LinkScroll>
  );

  const ConsultationButton = ({ small = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const handleMouseDown = () => {
      setIsPressed(true);
      setConsultClicked(true);
    };
    const handleMouseUp = () => {
      setIsPressed(false);
      setConsultClicked(false);
    };
    const handleMouseLeave = () => {
      setIsPressed(false);
      setConsultClicked(false);
      setIsHovered(false);
    };

    return (
      <LinkScroll
        to="download"
        offset={-100}
        spy
        smooth
        onClick={() => {
          setIsOpen(false);
          setConsultClicked(false);
          setIsHovered(false);
          setIsPressed(false);
        }}
        className={clsx(
          "base-bold uppercase text-white flex items-center gap-2 rounded-full shadow-md transition duration-300 cursor-pointer select-none",
          small
            ? "px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm"
            : "px-8 py-3 text-base",
          (isHovered || isPressed || consultClicked) && "filter-brightness-110"
        )}
        style={{
          background: "linear-gradient(90deg, #47389b 0%, #9e54b0 100%)",
          filter:
            isPressed || consultClicked || isHovered
              ? "brightness(1.1)"
              : "brightness(1)",
          marginLeft: small ? "1rem" : undefined,
          userSelect: "none",
          pointerEvents: "auto",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onBlur={handleMouseLeave}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={small ? "w-3 h-3 md:w-4 md:h-4" : "w-5 h-5"}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          style={{
            transition: "transform 0.3s ease",
            transform: isHovered ? "translateX(4px)" : "translateX(0)",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h2.586a1 1 0 01.707.293l2.121 2.121a1 1 0 01.293.707V9a1 1 0 01-1 1H9a8.002 8.002 0 007 7v-1a1 1 0 011-1h2.879a1 1 0 01.707.293l2.121 2.121a1 1 0 01.293.707V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z"
          />
        </svg>
        Free Consultation
      </LinkScroll>
    );
  };

  const ServicesArrow = ({ open, mobile = false }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(
        mobile ? "w-4 h-4 mr-2" : "w-4 h-4 transition-transform duration-300"
      )}
      fill="none"
      viewBox="0 0 24 24"
      stroke="url(#arrowGradient)"
      strokeWidth={2}
      style={
        mobile ? {} : { transform: open ? "rotate(-180deg)" : "rotate(0deg)" }
      }
    >
      <defs>
        <linearGradient id="arrowGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#a364d3" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

  const servicesItems = [
    "Managed QA Services",
    "Dedicated Talent",
    "DevOps and Cloud",
    "App Development",
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]"
      )}
    >
      <div
        className="mx-auto flex items-center h-14 max-lg:px-0 px-0"
        style={{ minWidth: 0, maxWidth: "none" }}
      >
        {/* DESKTOP: Logo with margin left */}
        <div
          className="hidden lg:flex flex-shrink-0"
          style={{ marginLeft: "55px" }}
        >
          <a className="cursor-pointer flex-shrink-0 block">
            <img
              src="/images/logo.svg"
              alt="logo"
              className="w-[220px] h-auto md:w-[180px] max-lg:w-[130px]"
            />
          </a>
        </div>

        {/* DESKTOP: nav center */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-8 relative">
            {navItems.map(({ id, title }) => {
              if (title === "Services") {
                return (
                  <li
                    key={id}
                    className="relative"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <button
                      onClick={() => setServicesOpen((prev) => !prev)}
                      className="flex items-center gap-1 base-bold text-p4 cursor-pointer transition-colors duration-500 hover:text-p1"
                      aria-expanded={isServicesVisible}
                      aria-haspopup="true"
                      type="button"
                    >
                      <span>
                        <ServicesArrow open={isServicesVisible} />
                      </span>
                      <span>{title}</span>
                    </button>

                    <ul
                      className={clsx(
                        "absolute top-full left-0 mt-3 w-[280px] rounded-lg bg-gradient-to-br from-[#ec4899] via-[#8b5cf6] to-[#a364d3] p-5 shadow-lg flex flex-col gap-4 text-white font-semibold z-50",
                        !isServicesVisible && "hidden",
                        "transition-opacity duration-300 ease-in-out"
                      )}
                      onMouseEnter={handleServicesMouseEnter}
                      onMouseLeave={handleServicesMouseLeave}
                    >
                      {servicesItems.map((item) => (
                        <li
                          key={item}
                          className="cursor-pointer rounded-md px-4 py-2 transition-colors duration-300 whitespace-nowrap"
                          style={{ backgroundColor: "transparent" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "rgba(255,255,255,0.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                          }}
                        >
                          <LinkScroll
                            to={item.toLowerCase().replace(/\s/g, "-")}
                            smooth
                            offset={-100}
                            spy
                            onClick={() => setServicesOpen(false)}
                            className="block text-white"
                          >
                            {item}
                          </LinkScroll>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              return (
                <li key={id}>
                  <NavLink title={title} />
                </li>
              );
            })}
          </ul>
        </nav>

        {/* DESKTOP: Free consultation */}
        <div
          className="hidden lg:flex flex-shrink-0 ml-auto"
          style={{ marginRight: "55px" }}
        >
          <ConsultationButton />
        </div>

        {/* MOBILE: flex container with space-between */}
        <div
          className="lg:hidden flex items-center w-full h-14 px-4 justify-between relative"
          style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
        >
          {/* Logo */}
          <div className="flex-shrink-0 -ml-2">
            <a className="cursor-pointer block">
              <img
                src="/images/logo.svg"
                alt="logo"
                className="w-[130px] h-auto"
              />
            </a>
          </div>

          {/* Free consultation centered */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-y-1/2 pointer-events-auto"
            style={{ transform: "translate(-40%, -50%)" }}
          >
            <ConsultationButton small />
          </div>

          {/* Hamburger right */}
          <div className="flex-shrink-0">
            <button
              className="z-50 size-10 border-2 border-s4/25 rounded-full flex flex-col justify-center items-center p-[6px]"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {!isOpen && (
                <>
                  <span
                    className="block h-[2px] w-6 rounded-sm mb-1.5 transition-colors duration-300"
                    style={{ backgroundColor: "#8b5cf6" }}
                  />
                  <span
                    className="block h-[2px] w-6 rounded-sm mb-1.5 transition-colors duration-300"
                    style={{ backgroundColor: "#8b5cf6" }}
                  />
                  <span
                    className="block h-[2px] w-6 rounded-sm transition-colors duration-300"
                    style={{ backgroundColor: "#8b5cf6" }}
                  />
                </>
              )}

              {isOpen && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        <nav
          className={clsx(
            "lg:hidden absolute left-0 top-full w-full bg-black-100 z-40 px-4 pb-8 pt-4 flex flex-col gap-5",
            isOpen ? "block" : "hidden"
          )}
        >
          <ul className="flex flex-col gap-4">
            {navItems.map(({ id, title }) => {
              if (title === "Services") {
                return (
                  <li key={id}>
                    <button
                      className="base-bold text-p4 transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-0"
                      onClick={() => setServicesOpen((prev) => !prev)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      type="button"
                    >
                      {title}
                    </button>
                    {servicesOpen && (
                      <ul className="flex flex-col pl-6 mt-2 gap-3 text-sm font-semibold text-white">
                        {servicesItems.map((item) => (
                          <li key={item}>
                            <LinkScroll
                              to={item.toLowerCase().replace(/\s/g, "-")}
                              smooth
                              offset={-100}
                              spy
                              onClick={() => {
                                setIsOpen(false);
                                setServicesOpen(false);
                              }}
                              className="block cursor-pointer hover:text-p1"
                            >
                              {item}
                            </LinkScroll>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }
              return (
                <li key={id}>
                  <NavLink
                    title={title}
                    onClick={() => {
                      setIsOpen(false);
                      setServicesOpen(false);
                    }}
                  />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
