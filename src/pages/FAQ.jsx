import { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqData = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of dental services, including routine cleanings, fillings, crowns, root canals, and cosmetic dentistry such as veneers and teeth whitening. We also provide pediatric dentistry, orthodontics, and periodontics services for patients of all ages.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept most major insurance plans, including PPO and HMO providers. We recommend you contact our office to verify if your specific insurance plan is accepted. Our staff can also assist you in understanding your benefits and working with your insurance provider to maximize coverage for your treatments.",
    },
    {
      question: "How often should I visit the dentist?",
      answer:
        "It is recommended to visit the dentist every 6 months for regular checkups and professional cleanings. However, some patients may need more frequent visits depending on their oral health, such as those with gum disease, cavities, or orthodontic treatments. Regular dental visits help in preventing dental problems and detecting issues early, which can save you time and money in the long run.",
    },
    {
      question: "Do you offer emergency dental care?",
      answer:
        "Yes, we provide emergency dental care for patients who experience sudden pain, injury, or trauma to the teeth, gums, or mouth. Whether it's a chipped tooth, severe toothache, or a knocked-out tooth, our team is here to assist you immediately. Please call our office right away for emergency treatment. If you have a dental emergency outside of regular office hours, we have an after-hours service to help you.",
    },
    {
      question: "What are the signs that I need a root canal?",
      answer:
        "A root canal may be necessary if you experience persistent tooth pain, especially when chewing or applying pressure, prolonged sensitivity to hot or cold temperatures, or darkening of the tooth. Other signs include swelling or tenderness in the surrounding gums or the presence of a pimple on the gums. If you experience any of these symptoms, it’s important to see a dentist as soon as possible to avoid further complications and relieve discomfort.",
    },
    {
      question: "What is teeth whitening and is it safe?",
      answer:
        "Teeth whitening is a cosmetic procedure that lightens the color of your teeth by removing stains and discoloration. We offer both in-office and at-home whitening treatments. In-office treatments typically involve a professional-grade bleaching agent that is applied to the teeth, while at-home treatments include custom trays and whitening gel. Teeth whitening is safe when done under the supervision of a dental professional, but it’s important to consult with your dentist before proceeding, especially if you have sensitive teeth or dental issues.",
    },
    {
      question: "How can I prevent gum disease?",
      answer:
        "Preventing gum disease involves good oral hygiene practices, including brushing your teeth twice a day with fluoride toothpaste, flossing daily, and visiting your dentist regularly for checkups and cleanings. It’s also important to avoid tobacco products, eat a balanced diet, and manage any health conditions like diabetes, which can increase the risk of gum disease. If caught early, gum disease is reversible, so regular dental care is key.",
    },
    {
      question: "Is dental sedation available for nervous patients?",
      answer:
        "Yes, we offer dental sedation options for patients who experience anxiety or fear during dental procedures. Our sedation options include nitrous oxide (laughing gas), oral sedatives, and intravenous (IV) sedation. Your dentist will discuss the best option for you based on the type of procedure and your level of anxiety. Sedation ensures you remain relaxed and comfortable throughout your treatment.",
    },
    {
      question: "What should I do if I lose a tooth?",
      answer:
        "If you lose a tooth, it’s important to act quickly. If the tooth is a permanent one, try to find it and gently rinse it with water (avoid scrubbing or using soap). If possible, place the tooth back in the socket or keep it moist by storing it in a cup of milk or saliva. Contact your dentist immediately for emergency care. If treated promptly, it’s sometimes possible to re-implant the tooth and save it.",
    },
    {
      question: "How can I straighten my teeth without traditional braces?",
      answer:
        "There are several options to straighten your teeth without traditional metal braces. One popular option is Invisalign, which uses clear plastic aligners that gradually shift your teeth into place. These aligners are custom-made for your mouth and are removable, making them more comfortable and convenient than traditional braces. Consult with our orthodontist to determine if you are a candidate for Invisalign or other clear aligners.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-auto mx-5 p-6">
      <h2 className="text-6xl font-bold mb-8 text-gray-700">FAQ</h2>
      <div className="mb-24">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b-2 overflow-hidden border-gray-300 py-4"
          >
            {/* TOGGLE BUTTON */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center py-3 text-left font-medium text-gray-800 focus:outline-none"
            >
              <span className="uppercase font-semibold text-gray-500">
                {item.question}
              </span>
              <div
                className={`relative w-5 h-5 flex items-center justify-center`}
              >
                <div
                  className={`absolute bg-gray-500 w-1 h-5 transition-transform ${
                    activeIndex === index ? "rotate-90" : "rotate-90"
                  }`}
                ></div>
                <div
                  className={`absolute bg-gray-500 w-5 h-1 transition-transform ${
                    activeIndex === index ? "rotate-0" : "rotate-90"
                  }`}
                ></div>
              </div>
            </button>

            {/* Accordion Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="px-4 py-3 bg-white text-gray-400">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <h2 className="uppercase text-lg font-bold text-gray-500">
          still have questions? we're happy yo help!
        </h2>
        <Button className="text-gray-700 hover:bg-gray-500 hover:text-white">
          <Link to="/contact-us">contact us</Link>
        </Button>
      </div>
    </div>
  );
};

export default FAQ;
