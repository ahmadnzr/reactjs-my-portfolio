import { Link } from "react-router-dom";
import style from "./NavbarMenu.module.css";

const NavbarMenu = ({ onMenuBurgerClicked, clickedMenu }) => {
  const onClickMenu = () => {
    onMenuBurgerClicked();
  };

  return (
    <div
      className={`${style.navbarMenu} ${clickedMenu && style.showMenu}`}
      onClick={onMenuBurgerClicked}
    >
      <Link to={`/`} className={style.menuItem} onClick={onClickMenu}>
        Home
      </Link>
      <Link to={`/portfolio`} className={style.menuItem} onClick={onClickMenu}>
        Portfolio
      </Link>
      <Link to={`/timeline`} className={style.menuItem} onClick={onClickMenu}>
        Time Line
      </Link>
      <Link to={`/`} className={style.menuItem} onClick={onClickMenu}>
        Contact
      </Link>
    </div>
  );
};

export default NavbarMenu;
