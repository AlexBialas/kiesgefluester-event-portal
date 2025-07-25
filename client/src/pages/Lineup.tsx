// src/pages/Lineup.tsx
import { motion } from "framer-motion";
import "../styles/flipCard.css";

const djs = [
  {
    name: "DJ Hurricane",
    genre: "Zug der Liebe / Wurzelfestival",
    bio: "Bekannt für energetische Sets und positive Vibes.",
    instagram: "#",
  },
  {
    name: "Fränky B",
    genre: "Zug der Liebe",
    bio: "Techno-Enthusiast mit tiefen Beats.",
    instagram: "#",
  },
  {
    name: "DJ Wendeltreppe",
    genre: "Zug der Liebe",
    bio: "Dreht die Crowd mit hypnotischen Sounds.",
    instagram: "#",
  },
  {
    name: "Cherry Core",
    genre: "MFB, VOID Berlin, Questline, SMR",
    bio: "Berlin-based DJane mit harten Drops.",
    instagram: "#",
  },
  {
    name: "Sebastian Busse",
    genre: "Durch&Durch",
    bio: "Lokalheld mit groovigen Beats.",
    instagram: "#",
  },
  {
    name: "Saltmaen / Richard Ulrich",
    genre: "Kymatik",
    bio: "Elektronische Perfektion auf zwei Decks.",
    instagram: "#",
  },
];

const Lineup = () => {
  return (
    <section className="relative min-h-screen bg-black text-white px-6 py-16 overflow-hidden">
      {/* Laser Glow Background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute -top-32 -left-32 w-[700px] h-[700px] bg-pink-500 rounded-full blur-[180px] opacity-40 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-700 rounded-full blur-[180px] opacity-40 animate-pulse delay-200" />
      </div>

      <motion.h2
        className="text-4xl font-bold text-center mb-16 text-white drop-shadow-[0_0_10px_rgba(255,0,128,0.9)]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Unser Line-Up
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {djs.map((dj, i) => (
          <motion.div
            key={dj.name}
            className="flip-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flip-card-inner">
              {/* FRONT */}
              <div className="flip-card-front bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-4 shadow-xl hover:shadow-pink-500/40 transition-all duration-300 border border-pink-500/10">
                <img
                  src="/dj.jpg"
                  alt={dj.name}
                  className="w-full h-56 object-cover rounded-lg mb-4 border border-pink-500/20"
                />
                <h3 className="text-xl font-bold text-pink-400 mb-1">
                  {dj.name}
                </h3>
                <p className="text-sm text-gray-300">{dj.genre}</p>
              </div>

              {/* BACK */}
              <div className="flip-card-back bg-gradient-to-br from-pink-900 via-black to-purple-800 text-white rounded-xl p-6 flex flex-col justify-center items-center text-center border border-pink-500/30">
                <h3 className="text-xl font-bold text-pink-300 mb-2">
                  {dj.name}
                </h3>
                <p className="text-sm text-gray-300 mb-4">{dj.bio}</p>
                <a
                  href={dj.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-white underline transition"
                >
                  Folge auf Instagram →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Lineup;
