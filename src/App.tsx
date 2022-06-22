import React from "react";
import classes from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Slider from "./components/Slider/Slider";
import ClothesGirl from "./components/ClothesGirl/ClothesGirl";
import Clothes from "./components/Сlothes/Clothes";
import BG from "./assets/IndigoDesigns_BabyGirl_pp+(7)1.jpg";
import Contacts from "./components/Contacts/Contacts";
import ClothesBoy from "./components/ClothesBoy/ClothesBoy";
import ClothesOthers from "./components/ClothesOthers/ClothesOthers";

function App() {
  return (
    <div className={classes.App}>
      <img className={classes.bg} src={BG} alt="" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Slider />} />
          <Route path="clothes" element={<Clothes />} />
          <Route path="clothes-girl" element={<ClothesGirl />} />
          <Route path="clothes-boy" element={<ClothesBoy />} />
          <Route path="clothes-others" element={<ClothesOthers />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
