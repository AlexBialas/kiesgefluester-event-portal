import React from "react";

const Location = () => {
  return (
    <section
      id="location"
      className="bg-black text-white py-20 px-4 flex flex-col items-center justify-center text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Location</h2>
      <p className="max-w-2xl mb-2 text-lg">
        Unser Open-Air-Event findet in der{" "}
        <span className="font-semibold text-pink-500">
          ehemaligen Kiesgrube Neuendorf bei Beeskow
        </span>{" "}
        statt – mitten in der Natur, unter freiem Himmel. Es gibt kostenlose
        Parkplätze vor Ort.
      </p>
      <p className="max-w-2xl mb-8 text-sm text-gray-300">
        📍 Adresse:{" "}
        <span className="text-white font-medium">
          Birkholzer Weg, 15848 Beeskow
        </span>
        <br />
        Mit dem Auto erreichbar über die B168, Parkplätze vorhanden.
        <br />
        Nächstgelegene Bahnstation:{" "}
        <span className="text-white font-medium">Bahnhof Beeskow</span>, ca. 10
        Minuten zu Fuß.
      </p>

      <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Kiesgrube Neuendorf Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.6831152481065!2d14.2541188!3d52.1667297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4707d93bb79ec79b%3A0x8b8f94bff37a4715!2sBirkholzer%20Weg%2C%2015848%20Beeskow!5e0!3m2!1sde!2sde!4v1721910430000!5m2!1sde!2sde"
          width="100%"
          height="400"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
