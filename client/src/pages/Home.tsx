import { Link } from "react-router-dom";
import Countdown from "../components/Countdown";
import Hero from "../components/Hero";
import Lineup from "../components/Lineup";
import Location from "../components/Location";
import FaqSection from "../components/FaqSection";

const Home = () => {
  return (
    <>
      {/* Hero section with event poster */}
      <Hero />

      {/* Title, CTA & Countdown */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider mb-4 uppercase">
          KIESGEFLÜSTER
        </h1>
        <p className="text-lg md:text-2xl mb-2 font-light italic">
          Das unvergessliche elektronische Event unter freiem Himmel
        </p>
        <p className="text-md md:text-lg mb-6">
          {" "}
          13. September 2025 – ehem. Kiesgrube Neundorf bei Beeskow
        </p>
        <Link
          to="/tickets"
          className="bg-pink-600 hover:bg-pink-500 transition text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md"
        >
          Ticket kaufen
        </Link>

        <Countdown />
      </section>

      {/* DJ Lineup */}
      <Lineup />
      <Location />
      <FaqSection />
    </>
  );
};

export default Home;
