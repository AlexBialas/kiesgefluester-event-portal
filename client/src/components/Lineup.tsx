import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/3dCarousel.css";

const djs = [
  { name: "DJ HURRICANE", desc: "Zug der Liebe / Wurzelfestival" },
  { name: "FRÄNKY B", desc: "Zug der Liebe" },
  { name: "DJ WENDELTREPPE", desc: "Zug der Liebe" },
  {
    name: "CHERRY CORE",
    desc: "MFB, VOID Berlin, Questline Records, SMR Underground",
  },
  { name: "SEBASTIAN BUSSE", desc: "Durch&Durch" },
  { name: "SALTMAEN / RICHARD ULRICH", desc: "Kymatik" },
];

const DjsCarousel = () => {
  return (
    <section className="relative py-20 bg-black text-white px-4 overflow-hidden">
      <div className="laser-bg parallax-bg" />
      <h2 className="text-4xl font-bold text-center mb-12 z-10 relative">
        Meet the DJs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
        {djs.map((dj, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-pink-600 to-purple-800 rounded-xl p-6 shadow-2xl border border-pink-400 backdrop-blur-sm hover:scale-105 transition-transform relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card-laser-overlay" />
            <h3 className="text-xl font-extrabold text-white">{dj.name}</h3>
            <p className="text-sm mt-2 text-pink-100">{dj.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12 relative z-10">
        <Link
          to="/lineup"
          className="pulse-button bg-gradient-to-r from-pink-600 to-purple-700 text-white px-8 py-3 rounded-full shadow-lg border border-pink-400 hover:scale-105 transition-all duration-300"
        >
          See Full Lineup
        </Link>
      </div>
    </section>
  );
};

export default DjsCarousel;
