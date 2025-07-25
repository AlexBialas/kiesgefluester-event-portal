import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 flex flex-col items-center justify-center">
      <motion.h2
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Kontakt
      </motion.h2>

      <motion.form
        className="w-full max-w-xl bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Nachricht gesendet!");
        }}
      >
        <div>
          <label className="block mb-1 text-sm font-semibold">Dein Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded bg-black text-white border border-pink-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-semibold">E-Mail</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded bg-black text-white border border-pink-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-semibold">Nachricht</label>
          <textarea
            rows={4}
            className="w-full px-4 py-2 rounded bg-black text-white border border-pink-500 focus:outline-none"
            required
          />
        </div>
        <motion.button
          type="submit"
          className="bg-gradient-to-r from-pink-600 to-purple-700 hover:scale-105 transition px-6 py-2 rounded font-bold shadow-lg text-white animate-pulse"
          whileHover={{ scale: 1.05 }}
        >
          Senden
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
