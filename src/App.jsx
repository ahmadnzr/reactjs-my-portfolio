import { Routes, Route } from "react-router-dom";
import style from "./App.module.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import PortfolioDetail from "./pages/portfolioDetail/PortfolioDetail";
import PortfolioList from "./pages/portfolioList/PortfolioList";

function App() {
  return (
    <div className={style.App}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioList />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
