import React from "react";
import classes from "./Clothes.module.scss";
import { Link } from "react-router-dom";
import imagesGirl from "../../assets/imagesBoy/IMG_6346.jpg";
import imagesBoy from "../../assets/imagesBoy/IMG_6391.jpg";

const Clothes = () => {
  return (
    <div className={classes.clothes}>
      <p className={classes.clothes__title}>
        Нарядная одежда для новорожденных
      </p>
      <div className={classes.clothes__items}>
        <div className={classes.clothes__item}>
          <img className={classes.clothes__img} src={imagesGirl} alt="" />
          <Link to="/clothes-girl">
            <button
              className={`${classes.clothes__girlImgBtn} ${classes.clothes__btn}`}
            >
              Для девочек
            </button>
          </Link>
        </div>
        <div className={classes.clothes__item}>
          <img className={classes.clothes__img} src={imagesBoy} alt="" />
          <Link to="/clothes-boy">
            <button
              className={`${classes.clothes__boyImgBtn} ${classes.clothes__btn}`}
            >
              Для мальчиков
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Clothes;
