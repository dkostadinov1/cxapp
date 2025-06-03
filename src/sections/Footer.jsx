import { socials } from "../constants/index.jsx";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row md:justify-between gap-10">
        {/* LEFT SIDE */}
        <div className="flex flex-col max-w-sm space-y-6">
          <div>
            <img
              src="/images/logo.svg"
              alt="Company Logo"
              className="w-[160px] h-auto mb-2"
            />
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Quality expertise from strategy to execution
            </p>
          </div>

          <div>
            <h3
              className="text-2xl font-bold mb-3"
              style={{
                background: "linear-gradient(90deg, #ec4899, #8b5cf6, #a364d3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Contact Us
            </h3>
            <p className="text-gray-400 leading-relaxed">
              hi@company.com <br />
              1303 Country, <br />
              117 Street
            </p>
          </div>

          <ul className="flex gap-4">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={title}
                  className="hover:opacity-75 transition-opacity"
                >
                  <img
                    src={icon}
                    alt={title}
                    className="w-8 h-8 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE - Contact Form */}
        <div className="flex-1 max-w-lg mx-auto md:mx-0">
          <h3
            className="text-2xl font-bold mb-4"
            style={{
              background: "linear-gradient(90deg, #ec4899, #8b5cf6, #a364d3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Have a question?
          </h3>
          <p className="mb-6 text-gray-400 leading-relaxed">
            Let us tailor a service package that meets your needs. Tell us about
            your business, and we will get back to you with some ideas as soon
            as possible!
          </p>
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded border border-gray-700 bg-black text-white placeholder-gray-500 focus:outline-none focus:border-purple-600"
                required
              />
              <input
                type="text"
                placeholder="Company Name"
                className="p-3 rounded border border-gray-700 bg-black text-white placeholder-gray-500 focus:outline-none focus:border-purple-600"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded border border-gray-700 bg-black text-white placeholder-gray-500 focus:outline-none focus:border-purple-600"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                className="p-3 rounded border border-gray-700 bg-black text-white placeholder-gray-500 focus:outline-none focus:border-purple-600"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="p-3 rounded border border-gray-700 bg-black text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 resize-none"
              required
            />
            <button
              type="submit"
              className="mt-2 rounded-full px-8 py-3 text-white font-bold shadow-md transition duration-300"
              style={{
                background: "linear-gradient(90deg, #47389b 0%, #9e54b0 100%)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "brightness(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "brightness(1)";
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Pink border */}
      <div className="border-t border-pink-600 max-w-7xl mx-auto px-6" />

      {/* Sitemap centered above bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <ul className="flex flex-wrap justify-center gap-6 text-sm cursor-pointer text-gray-300">
          {[
            "Explore",
            "Careers",
            "Blog",
            "Contacts",
            "Case Studies",
            "Services",
            "QA as a Service",
            "Operations",
            "Applications",
            "Outsourcing",
          ].map((item) => (
            <li
              key={item}
              className="hover:text-purple-600 transition-colors"
              tabIndex={0}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom copyright and legal */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-xs">
        <p className="text-gray-100 text-center flex-1 md:flex-none">
          © 2025 All Rights Reserved
        </p>
        <div className="flex gap-6 text-gray-500 cursor-pointer">
          <p className="hover:text-purple-600 transition-colors">
            Privacy Policy
          </p>
          <p className="hover:text-purple-600 transition-colors">
            Terms of Use
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
