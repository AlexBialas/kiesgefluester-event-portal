import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaTicketAlt,
  FaCalendarAlt,
} from "react-icons/fa";

export default function Location() {
  return (
    <section className="relative min-h-screen overflow-hidden py-24 text-white">
      {/* Neon gradient background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute -top-32 -left-32 w-[800px] h-[800px] bg-pink-500 rounded-full blur-[250px] opacity-50 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-fuchsia-600 rounded-full blur-[250px] opacity-50 animate-pulse delay-200" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[300px] opacity-30 animate-pulse delay-300" />
      </div>

      {/* Content wrapper */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-12 z-10">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 space-y-6"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl font-bold flex items-center gap-2 text-white drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]"
          >
            📍 Event Location
          </motion.h2>
          <p>
            Unser <span className="font-semibold">Open-Air-Event</span> findet
            in der{" "}
            <span className="text-pink-400 font-semibold">
              ehemaligen Kiesgrube Neuendorf bei Beeskow
            </span>{" "}
            statt – mitten in der Natur, unter freiem Himmel. Es gibt kostenlose
            Parkplätze vor Ort.
          </p>
          <ul className="space-y-2">
            <li>
              📍 <span className="font-semibold">Adresse:</span> Birkholzer Weg,
              15848 Beeskow
            </li>
            <li>
              🚗 Mit dem Auto erreichbar über die B168, Parkplätze vorhanden.
            </li>
            <li>
              🚉{" "}
              <span className="font-semibold">Nächstgelegene Bahnstation:</span>{" "}
              <span className="font-bold">Bahnhof Beeskow</span>, ca. 10 Minuten
              zu Fuß.
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 items-center pt-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-pink-400 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-pink-400 transition duration-300"
            >
              <FaFacebook />
            </a>

            <a
              href="/tickets"
              className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md shadow transition duration-300"
            >
              <FaTicketAlt /> Jetzt Tickets sichern
            </a>

            <a
              href="https://calendar.google.com/calendar/u/0/r/eventedit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white hover:border-pink-400 text-white px-4 py-2 rounded-md transition duration-300"
            >
              <FaCalendarAlt /> Zum Kalender hinzufügen
            </a>
          </div>
        </motion.div>

        {/* Right map */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 w-full h-[300px] lg:h-[400px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.007251889313!2d14.233435915862418!3d52.16868297973825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a99349a77bdb5f%3A0x6f602e2fa4f2b9a4!2sBirkholzer%20Weg%2C%2015848%20Beeskow!5e0!3m2!1sen!2sde!4v1662205263286!5m2!1sen!2sde"
            width="100%"
            height="100%"
            className="rounded-lg shadow-lg border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
