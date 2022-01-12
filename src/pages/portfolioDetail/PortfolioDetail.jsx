import style from "./portfolioDetail.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { portfolio } from "../../assets/portfolio";
import { BiGitRepoForked, BiLinkExternal } from "react-icons/bi";

const PortfolioDetail = () => {
  const history = useLocation();
  const pId = history.pathname.split("/")[2];
  const data = portfolio.find((item) => item.id == pId);

  return (
    <div className={style.detail}>
      <div className={style.top}>
        <img src={data.image} alt="" className={style.image} />
        <div className={style.links}>
          <div className={style.linkItem}>
            <a href={data.links.repo} target="_blank">
              <BiGitRepoForked />
            </a>
          </div>
          <div className={style.linkItem}>
            <a href={data.links.web} target="_blank">
              <BiLinkExternal />
            </a>
          </div>
        </div>
      </div>
      <div className={style.info}>
        <h1 className={style.title}>{data.title}</h1>
        <div className={style.category}>
          {data.category.map((c) => (
            <span className={style.cItem}>#{c}</span>
          ))}
        </div>
        <p>{data.longDesc}</p>
      </div>
    </div>
  );
};

export default PortfolioDetail;
