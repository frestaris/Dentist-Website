import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 p-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Dental Center */}
        <div>
          <h3 className="text-xl font-semibold mb-3">About Dental Center</h3>
          <p className="text-md">
            Our Dental Center is dedicated to providing exceptional healthcare
            services, utilizing state-of-the-art technology and compassionate
            care for every patient.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-md">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link to="/our-team" className="hover:text-primary">
                Our Team
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-primary">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-primary">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-md">
            <li>
              <strong>Address:</strong> 123 Dental Lane, Health City, HC 12345
            </li>
            <li>
              <strong>Phone:</strong> +1 234 567 890
            </li>
            <li>
              <strong>Email:</strong> info@dentalcenter.com
            </li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Our Location</h3>
          <div className="w-full h-48 bg-gray-300">
            <iframe
              title="Google Map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093744!2d144.9537363153202!3d-37.81627937975154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5773c0fdd2a0a0!2sMedical%20Center!5e0!3m2!1sen!2s!4v1697651521647!5m2!1sen!2s"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
