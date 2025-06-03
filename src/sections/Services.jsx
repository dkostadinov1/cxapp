import { Element } from "react-scroll";
import Button from "../components/Button.jsx";

const services = [
  {
    id: 1,
    title: "Managed QA Services QAaaS",
    description:
      "Comprehensive quality assurance services tailored to your business needs, ensuring top-notch product reliability and performance.",
  },
  {
    id: 2,
    title: "Dedicated Engineering Talent",
    description:
      "Access to a skilled engineering team dedicated exclusively to your projects for faster delivery and higher quality.",
  },
  {
    id: 3,
    title: "DevOps & Cloud Engineering",
    description:
      "Efficient infrastructure automation and cloud solutions to streamline your operations and improve scalability.",
  },
  {
    id: 4,
    title: "Application Development",
    description:
      "Custom application development tailored to your unique business requirements, leveraging modern technologies.",
  },
];

const Services = () => {
  return (
    <section className="py-20">
      <Element name="services">
        <div className="container max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-extrabold text-center text-p4 mb-14 uppercase tracking-wide">
            Our Services
          </h2>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            style={{ minWidth: "100%" }}
          >
            {services.map(({ id, title, description }) => (
              <div
                key={id}
                className="bg-s2 rounded-2xl p-8 flex flex-col justify-between border-2 border-s3 hover:border-p1 transition-colors duration-300 shadow-sm hover:shadow-100 min-w-[280px]"
              >
                <h3 className="text-3xl font-extrabold text-p4 leading-tight mb-6">
                  {title}
                </h3>

                <p className="text-p5 text-base mb-8">{description}</p>

                <Button className="self-start">
                  {id === 1
                    ? "EXPLORE QAaaS"
                    : id === 2
                      ? "Explore Outsourcing"
                      : id === 3
                        ? "Explore Operations"
                        : "Explore Development"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Services;
