import style from "./NavbarMenu.module.css";

const NavbarMenu = ({ onMenuBurgerClicked, clickedMenu }) => {
  return (
    <div className={`${style.navbarMenu} ${clickedMenu && style.showMenu}`}>
      <a href="#about" className={style.menuItem} onClick={onMenuBurgerClicked}>
        About
      </a>
      <a
        href="#portfolio"
        className={style.menuItem}
        onClick={onMenuBurgerClicked}
      >
        Portfolio
      </a>
      <a
        href="#timeline"
        className={style.menuItem}
        onClick={onMenuBurgerClicked}
      >
        Time Line
      </a>
      <a
        href="#contact"
        className={style.menuItem}
        onClick={onMenuBurgerClicked}
      >
        Contact
      </a>
    </div>
  );
};

export default NavbarMenu;
