import { useState } from "react";
import NavbarMenu from "../navbarMenu/NavbarMenu";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [clickedMenu, setClickedMenu] = useState(false);

  const onMenuBurgerClicked = () => {
    setClickedMenu(!clickedMenu);
  };

  return (
    <>
      <div className={`${style.navbar} ${clickedMenu && style.navbarBg}`}>
        <div />
        <span className={style.textLogo}>My Portofolio</span>
        <div
          className={`${style.burgerButton} ${clickedMenu && style.rotate}`}
          onClick={onMenuBurgerClicked}
        >
          <div className={style.line} />
          <div className={style.line} />
          <div className={style.line} />
        </div>
      </div>

      <NavbarMenu
        onMenuBurgerClicked={onMenuBurgerClicked}
        clickedMenu={clickedMenu}
      />
    </>
  );
};

export default Navbar;
