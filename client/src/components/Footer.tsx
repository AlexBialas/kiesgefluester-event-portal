import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-pink-900 via-black to-purple-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo + Copyright */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-pink-400">KIESGEFLÜSTER</h3>
          <p className="text-sm text-gray-400 mt-1">
            &copy; {new Date().getFullYear()} Alle Rechte vorbehalten.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
