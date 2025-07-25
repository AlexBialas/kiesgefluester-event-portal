import { useState } from "react";
import { motion } from "framer-motion";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: 1,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Danke für deine Anmeldung! 🎉");
  };

  return (
    <section className="relative min-h-screen bg-black text-white px-6 py-24 overflow-hidden">
      {/* Paralax Gradient Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-700 rounded-full blur-[250px] opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-purple-600 via-pink-400 to-fuchsia-500 rounded-full blur-[300px] opacity-40 animate-ping" />
      </div>

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl lg:text-5xl font-extrabold text-center mb-12 text-white"
      >
        ✨{" "}
        <span className="bg-gradient-to-r from-pink-400 to-fuchsia-500 text-transparent bg-clip-text">
          RSVP – Teilnahme bestätigen
        </span>
      </motion.h2>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto bg-white/5 backdrop-blur-2xl border border-pink-500/30 shadow-xl rounded-3xl p-10 space-y-6 relative z-10"
      >
        {/* Neon outline */}
        <div className="absolute inset-0 rounded-3xl border-2 border-pink-500/20 animate-pulse blur-[2px] pointer-events-none" />

        {/* Name */}
        <div>
          <label htmlFor="name" className="block mb-1 text-sm tracking-wide">
            Dein Name
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Max Mustermann"
            className="w-full px-4 py-3 rounded-md bg-black/40 text-white outline-none focus:ring-2 ring-pink-500 transition"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 text-sm tracking-wide">
            E-Mail-Adresse
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="du@example.com"
            className="w-full px-4 py-3 rounded-md bg-black/40 text-white outline-none focus:ring-2 ring-pink-500 transition"
          />
        </div>

        {/* Guests */}
        <div>
          <label htmlFor="guests" className="block mb-1 text-sm tracking-wide">
            Anzahl der Personen
          </label>
          <input
            required
            type="number"
            id="guests"
            name="guests"
            min={1}
            max={10}
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-black/40 text-white outline-none focus:ring-2 ring-pink-500 transition"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block mb-1 text-sm tracking-wide">
            Nachricht (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Ich freue mich auf das Event!"
            className="w-full px-4 py-3 rounded-md bg-black/40 text-white outline-none focus:ring-2 ring-pink-500 transition resize-none"
          />
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:brightness-110 transition text-white py-3 rounded-full font-semibold text-lg shadow-lg shadow-pink-600/40 animate-pulse"
        >
          Ich bin dabei!
        </motion.button>
      </motion.form>
    </section>
  );
};

export default RSVP;
