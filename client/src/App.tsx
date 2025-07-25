import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <main className="pt-20 px-4">
        <AppRoutes />
      </main>
    </div>
  );
};

export default App;
