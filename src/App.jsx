import style from "./App.module.css";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      console.log("bottom");
    }
  };
  return (
    <div className={style.App}>
      <Navbar />
      <Intro
        onScroll={handleScroll}
        style={{ overflowY: "scroll", maxHeight: "100vh" }}
      />
      <Portfolio />
      <div style={{ height: `100vh` }} />
    </div>
  );
}

export default App;
