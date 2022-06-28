import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Treat your taste buds!" />
      <h1 className="app__header-h1">The Home of Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        There is a difference between dining and eating. Dining is an art. When
        you eat to get most out of your meal, to please the palate, just as well
        as to satiate the appetite, that, my friend, is dining.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
