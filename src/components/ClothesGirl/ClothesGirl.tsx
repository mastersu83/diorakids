import React from "react";
import classes from "./ClothesGirl.module.scss";
import { useAppSelector } from "../../hooks/appHooks";
import image1 from "../../assets/imagesGirl/IMG_6334.jpg";
import image2 from "../../assets/imagesGirl/IMG_6339.jpg";
import image3 from "../../assets/imagesGirl/IMG_6345.jpg";
import image4 from "../../assets/imagesGirl/IMG_6348.jpg";
import image5 from "../../assets/imagesGirl/IMG_6351.jpg";
import image6 from "../../assets/imagesGirl/IMG_6354.jpg";
import image7 from "../../assets/imagesGirl/IMG_6359.jpg";
import image8 from "../../assets/imagesGirl/IMG_6360.jpg";
import image9 from "../../assets/imagesGirl/IMG_6440.jpg";
import image10 from "../../assets/imagesGirl/IMG_6583.JPG.jpg";
import image11 from "../../assets/imagesGirl/IMG_6591.JPG.jpg";
import image12 from "../../assets/imagesGirl/IMG_6594.JPG.jpg";
import image13 from "../../assets/imagesGirl/IMG_6603.JPG.jpg";
import image14 from "../../assets/imagesGirl/IMG_6607.JPG.jpg";
import image15 from "../../assets/imagesGirl/IMG_6615.JPG.jpg";
import image16 from "../../assets/imagesGirl/IMG_6618.JPG.jpg";
import image17 from "../../assets/imagesGirl/IMG_6624.JPG.jpg";
import image18 from "../../assets/imagesGirl/IMG_6625.JPG.jpg";
import image19 from "../../assets/imagesGirl/IMG_6651.JPG.jpg";
import image20 from "../../assets/imagesGirl/IMG_6666.JPG.jpg";

const ClothesGirl = () => {
  return (
    <div className={classes.clothesGirl}>
      <p className={classes.clothesGirl__title}>
        Комплекты на выписку для девочек
      </p>
      <div className={classes.clothesGirl__items}>
        <div className={classes.clothesGirl__verticalItems}>
          <img className={classes.clothesGirl__item} src={image1} alt="image" />
          <img className={classes.clothesGirl__item} src={image2} alt="image" />
          <img className={classes.clothesGirl__item} src={image3} alt="image" />
          <img className={classes.clothesGirl__item} src={image5} alt="image" />
          <img className={classes.clothesGirl__item} src={image6} alt="image" />
          <img className={classes.clothesGirl__item} src={image7} alt="image" />
          <img className={classes.clothesGirl__item} src={image9} alt="image" />
          <img
            className={classes.clothesGirl__item}
            src={image10}
            alt="image"
          />

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

          <img
            className={classes.clothesGirl__item}
            src={image17}
            alt="image"
          />

          <img
            className={classes.clothesGirl__item}
            src={image19}
            alt="image"
          />
        </div>
        <div className={classes.clothesGirl__horizontalItems}>
          <img className={classes.clothesGirl__item} src={image4} alt="image" />
          <img className={classes.clothesGirl__item} src={image8} alt="image" />
          <img
            className={classes.clothesGirl__item}
            src={image13}
            alt="image"
          />
          <img
            className={classes.clothesGirl__item}
            src={image16}
            alt="image"
          />
          <img
            className={classes.clothesGirl__item}
            src={image18}
            alt="image"
          />
          <img
            className={classes.clothesGirl__item}
            src={image20}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default ClothesGirl;
