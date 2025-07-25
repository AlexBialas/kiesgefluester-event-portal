import { useState } from "react";
import { tickets } from "../data/tickets";
import axios from "axios";

const TicketOptions = () => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({
    early_bird: 0,
    normal: 0,
  });

  const updateQuantity = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  const handleCheckout = async () => {
    const selectedTickets = Object.entries(quantities)
      .filter(([, qty]) => qty > 0)
      .map(([id, quantity]) => ({
        id,
        quantity,
      }));

    if (selectedTickets.length === 0) return;

    try {
      const res = await axios.post("/api/checkout", {
        tickets: selectedTickets,
      });
      window.location.href = res.data.url;
    } catch (err) {
      console.error("Checkout error", err);
    }
  };

  return (
    <section className="max-w-xl mx-auto my-12 p-6 bg-black rounded-lg shadow-lg text-white">
      <h2 className="text-3xl font-bold mb-6 text-center uppercase tracking-wide">
        Tickets
      </h2>

      {tickets.map((ticket) => (
        <div key={ticket.id} className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-semibold">{ticket.name}</h3>
            <p className="text-sm text-gray-400">{ticket.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(ticket.id, -1)}
              className="bg-gray-700 px-3 py-1 rounded"
            >
              -
            </button>
            <span>{quantities[ticket.id]}</span>
            <button
              onClick={() => updateQuantity(ticket.id, 1)}
              className="bg-gray-700 px-3 py-1 rounded"
            >
              +
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={handleCheckout}
        className="w-full mt-6 bg-pink-600 hover:bg-pink-500 transition text-white font-semibold py-3 rounded-full"
      >
        Jetzt bezahlen mit Stripe
      </button>
    </section>
  );
};

export default TicketOptions;
