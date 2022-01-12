import style from "./Portfolio.module.css";
import PortfolioItem from "../portfolioItem/PortfolioItem";

import portfolio from "../../assets/portfolio.json";

const Portfolio = () => {
  return (
    <div className={style.portfolio} id="portfolio">
      <div className={style.wrapper}>
        {portfolio.map((item) => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>
      <button className={style.showAll}>show all portfolio</button>
    </div>
  );
};

export default Portfolio;
