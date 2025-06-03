import { Element, Link as LinkScroll } from "react-scroll";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388 lg:-translate-y-6 transition-transform duration-300">
            <div className="caption small-2 uppercase text-p3">NEXT LEVEL</div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              QUALITY EXPERTISE
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              Cleverix delivers quality assurance, expert teams, and innovative
              development solutions to accelerate your business growth.
            </p>
            <div className="inline-block -translate-y-1 lg:-translate-y-8 transition-transform duration-300">
              <LinkScroll to="features" offset={-100} spy smooth>
                <button
                  type="button"
                  className="flex items-center gap-3 px-8 py-3 rounded-2xl
                    bg-gradient-to-r from-[#9e54b0] to-[#47389b]
                    text-p4 font-bold uppercase tracking-wider cursor-pointer
                    transition-shadow duration-300
                    hover:shadow-[0_0_20px_#47389b]
                    focus:outline-none focus:ring-4 focus:ring-[#47389b]"
                >
                  {/* Right arrow */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-5 h-5"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  LEARN MORE
                </button>
              </LinkScroll>
            </div>
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none opacity-50 hero-img_res">
            <img
              src="/images/mainIconsdark.svg"
              className="w-full h-auto scale-50 origin-center"
              alt="background icons"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
