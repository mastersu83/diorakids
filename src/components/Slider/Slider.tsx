import React from "react";
import classes from "./Slider.module.scss";
import SimpleImageSlider from "react-simple-image-slider";
import image from "../../assets/IndigoDesigns_BabyBoy_cl+(5)1.png";
import { useGetSliderImgQuery } from "../../services/galleryAPI";
import sliderImage1 from "../../assets/others/IMG_6454.jpg";
import sliderImage2 from "../../assets/imagesBoy/IMG_6422.jpg";

const Slider = () => {
  return (
    <div className={classes.slider}>
      <SimpleImageSlider
        width={1200}
        height={750}
        images={[sliderImage1, sliderImage2]}
        showBullets={true}
        showNavs={false}
        autoPlay={true}
        autoPlayDelay={2}
        slideDuration={2}
      />

      <img className={classes.slider__image} src={image} alt="BabyBoy" />
    </div>
  );
};

export default Slider;
