import style from "./Portfolio.module.css";
import PortfolioItem from "../portfolioItem/PortfolioItem";

const Portfolio = () => {
  return (
    <div className={style.portfolio} id="portfolio">
      <div className={style.wrapper}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <PortfolioItem key={i} />
        ))}
      </div>
      <button className={style.showAll}>show all portfolio</button>
    </div>
  );
};

export default Portfolio;
