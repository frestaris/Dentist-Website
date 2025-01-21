import Marquee from "react-fast-marquee";

const Sponsors = () => {
  const sponsors = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9i59cIR4IexrlHJEsuNuATpf--ArXxbbIzw&s",
      alt: "Sponsor 1",
    },
    {
      src: "https://www.dayhospitalsaustralia.net.au/wp-content/uploads/2024/04/LifeHealthcare_No_tag_Full_colour_Large-2.png",
      alt: "Sponsor 2",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBpMFSSx3oVyqvgwBuVDR-oC8Fb8AdHPJRA&s",
      alt: "Sponsor 3",
    },
    {
      src: "https://cdn.prod.website-files.com/5a6e91077bd20a0001852e86/60df7c7743b07d72b8303141_UnitedHealthcare%20Dental.png",
      alt: "Sponsor 4",
    },
    {
      src: "https://aapd.org.au/wp-content/uploads/2022/11/JS-Medical-Dental-Finance_logo2.png",
      alt: "Sponsor 5",
    },

    {
      src: "https://www.asid.org.au/content-assets/public/eyJhbGciOiJIUzI1NiJ9.eyJvYmplY3Rfa2V5IjoiMjgycWEweWJzcHBtbHNjNzE4NHo1a2FlMzd3byIsImRvbWFpbiI6Ind3dy5hc2lkLm9yZy5hdSJ9.GdT7muuR2DPuYfqkEom71FAfy1a-ZAR7z98712oYJtE",
      alt: "Sponsor 6",
    },
  ];

  return (
    <>
      {/* Content Section */}
      <div className="mx-auto max-w-2xl flex flex-col items-center text-center mb-20 px-4">
        <h2 className="text-3xl font-semibold mb-5">
          We work with the best, for you.
        </h2>
        <p className="text-lg text-gray-500">
          At Dental Center, our doctors are recognized by leading industry
          organizations, and work with the best clinical partners, labs, and
          safety technology to provide you top-notch dental care.
        </p>
      </div>

      {/* Sponsors Marquee */}
      <div className="overflow-hidden relative logos border-primary border-y-2">
        <Marquee gradient={false} speed={30}>
          {sponsors.concat(sponsors).map((sponsor, index) => (
            <div key={index} className="flex-shrink-0 px-4">
              <div className="block logos-slide">
                <img
                  src={sponsor.src}
                  alt={sponsor.alt}
                  className="my-5 w-32 h-20 object-contain"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default Sponsors;
