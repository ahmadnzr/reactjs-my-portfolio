import { useState } from "react";
import NavbarMenu from "../navbarMenu/NavbarMenu";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [clickedMenu, setClickedMenu] = useState(false);
  const [title, setTitle] = useState("Home");

  const onMenuBurgerClicked = () => {
    setClickedMenu(!clickedMenu);
  };

  return (
    <>
      <div
        className={`${style.burgerButton} ${clickedMenu && style.rotate}`}
        onClick={onMenuBurgerClicked}
      >
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>

      <NavbarMenu
        onMenuBurgerClicked={onMenuBurgerClicked}
        clickedMenu={clickedMenu}
      />
    </>
  );
};

export default Navbar;
