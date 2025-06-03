import { Element } from "react-scroll";

const certificates = [
  {
    id: 1,
    image: "/images/certificates/clutch.png",
    title: "Clutch",
  },
  {
    id: 2,
    image: "/images/certificates/besco1.png",
    title: "BESCO",
  },
  {
    id: 3,
    image: "/images/certificates/clutch-premier.webp",
    title: "Clutch Premier",
  },
  {
    id: 4,
    image: "/images/certificates/istqb.png",
    title: "ISTQB",
  },
  {
    id: 5,
    image: "/images/certificates/clutch-top.png",
    title: "Clutch Top",
  },
];

const MembershipsCertificates = () => {
  return (
    <section className="py-20 bg-s1">
      <Element name="memberships-certificates">
        <div className="container max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-extrabold text-center text-p4 mb-14 uppercase tracking-wide">
            Memberships & Certificates
          </h2>

          <div className="flex justify-center items-center gap-12 flex-wrap">
            {certificates.map(({ id, image, title }) => (
              <div
                key={id}
                className="flex flex-col items-center space-y-4"
                style={{ minWidth: "220px" }}
              >
                <div
                  className="overflow-hidden rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  style={{ width: "220px", height: "160px" }}
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center text-p4">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default MembershipsCertificates;
