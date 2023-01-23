import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import "./styles/App.css";

function App() {
  return (
    <>
      <Nav />
      <main className="mt-9">
        <Banner />
        <AboutMe />
      </main>
    </>
  );
}

export default App;
