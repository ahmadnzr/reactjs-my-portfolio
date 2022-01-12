import style from "./Home.module.css";
import Intro from "../../components/intro/Intro";
import Portfolio from "../../components/portfolio/Portfolio";

const Home = () => {
  return (
    <div className={style.home}>
      <Intro />
      <Portfolio />
    </div>
  );
};

export default Home;
