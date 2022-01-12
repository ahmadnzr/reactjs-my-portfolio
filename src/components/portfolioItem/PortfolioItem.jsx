import style from "./PortfolioItem.module.css";
import projectImage from "../../assets/images/project.png";

const PortfolioItem = () => {
  return (
    <div className={style.item}>
      <div className={style.itemImage}>
        <img src={projectImage} alt="" className={style.projectImage} />
      </div>
      <div className={style.category}>
        <span className={style.catItem}>reactjs</span>
        <span className={style.catItem}>portfolio</span>
      </div>
      <div className={style.itemDesc}>
        <p style={{ margin: 0 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
          voluptas!
        </p>
      </div>
      <div className={style.itemFooter}>Show detail</div>
    </div>
  );
};

export default PortfolioItem;
