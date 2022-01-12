import style from "./Portfolio.module.css";
import PortfolioItem from "../portfolioItem/PortfolioItem";
import { portfolio } from "../../assets/portfolio";

const Portfolio = () => {
  const shuffleItem = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  return (
    <div className={style.portfolio} id="portfolio">
      <div className={style.wrapper}>
        {shuffleItem(portfolio).slice(0, 4).map((item) => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>
      <button className={style.showAll}>show all portfolio</button>
    </div>
  );
};

export default Portfolio;
