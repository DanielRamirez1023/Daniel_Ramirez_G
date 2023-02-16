import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Studies from "./components/Studies";
import "./App.css";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <main className="mt-9">
        <Banner />
        <AboutMe />
        <Skills />
        <Studies />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
