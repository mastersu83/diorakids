import React from "react";
import classes from "./ClothesOthers.module.scss";
import image1 from "../../assets/others/IMG_6441.jpg";
import image2 from "../../assets/others/IMG_6453.jpg";
import image3 from "../../assets/others/IMG_6454.jpg";
import image4 from "../../assets/others/IMG_6458.jpg";
import image5 from "../../assets/others/IMG_6462.jpg";
import image6 from "../../assets/others/IMG_6464.jpg";
import image7 from "../../assets/others/IMG_6468.jpg";
import image8 from "../../assets/others/IMG_6469.jpg";
import image9 from "../../assets/others/IMG_6676.JPG.jpg";
import image10 from "../../assets/others/IMG_6683.JPG.jpg";
import image11 from "../../assets/others/IMG_6734.JPG.jpg";
import image12 from "../../assets/others/IMG_6753.JPG.jpg";
import image13 from "../../assets/others/IMG_6779.JPG.jpg";
import image14 from "../../assets/others/IMG_6787.JPG.jpg";
import image15 from "../../assets/others/IMG_6803.JPG.jpg";
import image16 from "../../assets/others/IMG_6808.JPG.jpg";

const ClothesOthers = () => {
  return (
    <div className={classes.clothesGirl}>
      <p className={classes.clothesGirl__title}>
        Пледы на выписку, наборы в кровать, корзины
      </p>
      <div className={classes.clothesGirl__items}>
        <div className={classes.clothesGirl__verticalItems}>
          <img className={classes.clothesGirl__item} src={image2} alt="image" />
          <img className={classes.clothesGirl__item} src={image7} alt="image" />
          <img className={classes.clothesGirl__item} src={image9} alt="image" />
          <img
            className={classes.clothesGirl__item}
            src={image10}
            alt="image"
          />
        </div>
        <div className={classes.clothesGirl__horizontalItems}>
          <img className={classes.clothesGirl__item} src={image1} alt="image" />
          <img className={classes.clothesGirl__item} src={image3} alt="image" />
          <img className={classes.clothesGirl__item} src={image4} alt="image" />

          <img className={classes.clothesGirl__item} src={image5} alt="image" />
          <img className={classes.clothesGirl__item} src={image6} alt="image" />
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
            src={image13}
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
          <img
            className={classes.clothesGirl__item}
            src={image16}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default ClothesOthers;
