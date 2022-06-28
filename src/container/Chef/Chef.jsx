import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Words" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            With cult foods, there is an underlying assumption that the best
            cooking ideas came generations ago.
          </p>
        </div>
        <p className="p__opensans">
          Yet culinary innovation is nothing to be ashamed of. When a chef tells
          me he is cooking with his grandmother's recipe, I always wonder why.
          Did talent skip the past two generations?
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Bruce Mbudi</p>
        <p className="p__opensans">Chef and Founder</p>
        <img src={images.sign1} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
