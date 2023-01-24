import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Studies from "./components/Studies";
import "./App.css";
import Proyects from "./components/Proyects";

function App() {
  return (
    <>
      <Nav />
      <main className="mt-9">
        <Banner />
        <AboutMe />
        <Skills />
        <Studies />
        <Proyects />
      </main>
    </>
  );
}

export default App;
