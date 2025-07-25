import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "Was ist Kiesgeflüster?",
    answer:
      "Ein unvergessliches Open-Air Event mit Techno, Licht und Vibes in der Kiesgrube Neundorf.",
  },
  {
    question: "Gibt es Tickets vor Ort?",
    answer:
      "Tickets sind ausschließlich online erhältlich – sichere dir dein Ticket im Voraus!",
  },
  {
    question: "Ist das Event ab 18?",
    answer:
      "Ja. Der Einlass ist nur mit gültigem Ausweis und ab 18 Jahren möglich.",
  },
  {
    question: "Was passiert bei schlechtem Wetter?",
    answer: "Das Event findet bei jedem Wetter statt – zieht euch passend an!",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white px-4 py-16">
      <h2 className="text-4xl font-extrabold text-center mb-10">FAQ</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-pink-500 to-purple-800 rounded-xl p-5 cursor-pointer shadow-md"
            onClick={() => toggleIndex(index)}
          >
            <h3 className="text-lg font-bold">{item.question}</h3>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  className="mt-2 text-sm text-white"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
