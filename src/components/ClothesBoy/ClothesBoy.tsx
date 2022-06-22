import React from "react";
import classes from "./ClothesBoy.module.scss";
import { ImageTypes } from "../../types/types";
import HorizontalLoader from "../Loader/HorizontalLoader";
import image1 from "../../assets/imagesBoy/IMG_6296.jpg";
import image2 from "../../assets/imagesBoy/IMG_6300.jpg";
import image3 from "../../assets/imagesBoy/IMG_6307.jpg";
import image4 from "../../assets/imagesBoy/IMG_6313.jpg";
import image5 from "../../assets/imagesBoy/IMG_6346.jpg";
import image6 from "../../assets/imagesBoy/IMG_6391.jpg";
import image7 from "../../assets/imagesBoy/IMG_6407.jpg";
import image8 from "../../assets/imagesBoy/IMG_6414.jpg";
import image9 from "../../assets/imagesBoy/IMG_6415.jpg";
import image10 from "../../assets/imagesBoy/IMG_6422.jpg";
import image11 from "../../assets/imagesBoy/IMG_6424.jpg";
import image12 from "../../assets/imagesBoy/IMG_6427.jpg";
import image13 from "../../assets/imagesBoy/IMG_6428.jpg";
import image14 from "../../assets/imagesBoy/IMG_6431.jpg";
import image15 from "../../assets/imagesBoy/IMG_6667.jpg";

const ClothesBoy = () => {
  return (
    <div className={classes.clothesGirl}>
      <p className={classes.clothesGirl__title}>
        Комплекты на выписку для мальчиков
      </p>
      <div className={classes.clothesGirl__items}>
        <div className={classes.clothesGirl__verticalItems}>
          <img className={classes.clothesGirl__item} src={image1} alt="image" />
          <img className={classes.clothesGirl__item} src={image2} alt="image" />
          <img className={classes.clothesGirl__item} src={image3} alt="image" />
          <img className={classes.clothesGirl__item} src={image4} alt="image" />
          <img className={classes.clothesGirl__item} src={image5} alt="image" />
          <img className={classes.clothesGirl__item} src={image6} alt="image" />
          <img className={classes.clothesGirl__item} src={image7} alt="image" />
          <img className={classes.clothesGirl__item} src={image8} alt="image" />

          <img
            className={classes.clothesGirl__item}
            src={image11}
            alt="image"
          />
          <img
            className={classes.clothesGirl__item}
            src={image12}
            alt="image"
          />

          <img
            className={classes.clothesGirl__item}
            src={image14}
            alt="image"
          />
          <img
            className={classes.clothesGirl__item}
            src={image15}
            alt="image"
          />
        </div>
        <div className={classes.clothesGirl__horizontalItems}>
          <img className={classes.clothesGirl__item} src={image9} alt="image" />

          <img
            className={classes.clothesGirl__item}
            src={image10}
            alt="image"
          />
          <img
            className={classes.clothesGirl__item}
            src={image13}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default ClothesBoy;
