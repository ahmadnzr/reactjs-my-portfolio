import style from "./PortfolioItem.module.css";
// import projectImage from "../../assets/images/project.png";

const PortfolioItem = ({ item }) => {
  return (
    <div className={style.item}>
      <div className={style.itemImage}>
        <img src={item.image} alt="" className={style.projectImage} />
      </div>
      <div className={style.category}>
        {item.category.map((c, index) => (
          <span className={style.catItem} key={index}>
            #{c}{" "}
          </span>
        ))}
      </div>
      <div className={style.itemDesc}>
        <p style={{ margin: 0 }}>{item.sortDesc}</p>
      </div>
      <div className={style.itemFooter}>Show detail</div>
    </div>
  );
};

export default PortfolioItem;
