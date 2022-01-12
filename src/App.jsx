import style from "./App.module.css";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className={style.App}>
      <Navbar />
      <Intro />
      <Portfolio />
      <div style={{ height: `100vh` }} />
    </div>
  );
}

export default App;
