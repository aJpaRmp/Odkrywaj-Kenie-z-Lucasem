import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MainSection from "./components/Main/Main.jsx";
import Contact from "./components/Contact/Form.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Trips from "./components/Trips/Trips.jsx";
import About from "./components/About/About.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <About />
        <Gallery />
        <Trips />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
