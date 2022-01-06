import React from "react";
import classes from "./Header.module.css";
import headerImg from "../asset/meals.jpg";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMelas</h1>
        <button>Cart</button>
      </header>
      <main className={classes["main-image"]}>
        <img src={headerImg} alt="lezzetli yemekler" />
      </main>
    </React.Fragment>
  );
};

export default Header;
