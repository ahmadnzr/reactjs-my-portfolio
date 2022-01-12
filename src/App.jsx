import { Routes, Route } from "react-router-dom";
import style from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import PortfolioList from "./pages/portfolioList/PortfolioList";

function App() {
  return (
    <div className={style.App}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioList />} />
      </Routes>
      <div>ini footer</div>
    </div>
  );
}

export default App;
