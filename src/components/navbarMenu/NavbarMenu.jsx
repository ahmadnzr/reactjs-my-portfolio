import style from "./NavbarMenu.module.css";

const NavbarMenu = ({ onMenuBurgerClicked, clickedMenu, setTitle }) => {
  const onClickMenu = (menu) => {
    onMenuBurgerClicked();
    setTitle(menu);
  };
  return (
    <div
      className={`${style.navbarMenu} ${clickedMenu && style.showMenu}`}
      onClick={onMenuBurgerClicked}
    >
      <a
        href="#intro"
        className={style.menuItem}
        onClick={() => onClickMenu("Intro")}
      >
        Intro
      </a>
      <a
        href="#portfolio"
        className={style.menuItem}
        onClick={() => onClickMenu("Portfolio")}
      >
        Portfolio
      </a>
      <a
        href="#timeline"
        className={style.menuItem}
        onClick={() => onClickMenu("Time Line")}
      >
        Time Line
      </a>
      <a
        href="#contact"
        className={style.menuItem}
        onClick={() => onClickMenu("Contact")}
      >
        Contact
      </a>
    </div>
  );
};

export default NavbarMenu;
