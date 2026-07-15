import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/HomePage";


function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
      </main>

      <Footer />
    </>
  );
}

export default App;