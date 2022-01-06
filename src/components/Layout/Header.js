import React from "react";
import classes from "./Header.module.css";
import headerImg from "../asset/meals.jpg";
import HeaderButton from "./HeaderButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMelas</h1>
        <HeaderButton />
      </header>
      <main className={classes["main-image"]}>
        <img src={headerImg} alt="lezzetli yemekler" />
      </main>
    </React.Fragment>
  );
};

export default Header;
