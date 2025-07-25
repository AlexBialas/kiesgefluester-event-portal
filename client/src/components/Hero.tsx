import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden">
      <img
        src="/poster1.jpg"
        alt="Kiesgeflüster Event Poster"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-black/60" />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-2xl px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-widest uppercase mb-4 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent drop-shadow-lg">
          KIESGEFLÜSTER VOL. 1
        </h1>
        <p className="text-lg md:text-xl mb-6">
          13. September · 20:00 Uhr · ehem. Kiesgrube Neundorf bei Beeskow
        </p>
        <Link
          to="/rsvp"
          className="inline-block bg-pink-600 hover:bg-pink-500 text-white font-semibold px-8 py-4 rounded-xl transition"
        >
          Teilnahme bestätigen
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
