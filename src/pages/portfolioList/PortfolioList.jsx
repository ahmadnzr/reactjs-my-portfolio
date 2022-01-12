import style from "./PortfolioList.module.css";
import { portfolio } from "../../assets/portfolio";
import PortfolioItem from "../../components/portfolioItem/PortfolioItem";

const PortfolioList = () => {
  const shuffleItem = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className={style.portfolioList}>
      <div className={style.wrapper}>
        {shuffleItem(portfolio).map((item) => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
