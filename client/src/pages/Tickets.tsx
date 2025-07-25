import { tickets } from "../data/tickets";

const Tickets = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Tickets sichern</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tickets.map((ticket) => (
          <div
            key={ticket.type}
            className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{ticket.type}</h3>
            <p className="text-pink-400 text-xl mb-4">{ticket.price}</p>
            <p className="text-sm text-gray-300 mb-6">{ticket.description}</p>
            <button className="bg-pink-600 hover:bg-pink-500 text-white px-5 py-2 rounded-full font-medium">
              Jetzt kaufen
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tickets;
