import React from "react";
import "./AboutPage.css";

// import Services from "../../Components/Home/Services/Services";
import "swiper/css";
import Services from "../Services/Services";

const AboutPage = () => {
  return (
    <div>
      <div className="aboutSection">
        <h2>About Our Comapny </h2>
        <img src={"/assets/about us/tea-picker-woman-s-asian-hands-close-up-pretty-tea-picking-girl-plantation.webp"} alt="" />
        <div className="aboutContent">
          <h3>Our Story</h3>
          <p style={{ fontWeight: "bold" }}>
            2002 by Kalgi And N.K.Mevada is a collection of specially curated tea blends poised to spark many moments of magic. Inspired by India – this collection tells the glorious stories of tea in a simple yet evocative manner. Each tea is born amidst a variety of flora, fauna, climate and topography. Furthermore, teas are paired with spices and flavours, fruits & flowers culminating in a taste experience that is unforgettable. 1868 is a celebration of diversity with each carefully selected variant having its unique story to tell, 1868 is celebration of Truly Indian Tea Stories.
          </p>
          <div className="content1">
            <div className="contentBox">
              <h4>Our Roots</h4>
              <p>
                Around the same time, in 2002s, we had our humble beginnings in the tea business. We truly believed that tea with all its inherent benefits could change the world.
              </p>
            </div>
            <div className="contentBox">
              <h4>Our Vision</h4>
              <p>
                With our founder’s dedication and master blender’s passion to bring premium quality Indian teas to the world, today Tea India is available in most  Grocery Stores across Ahmedabad, Surat, Baroda etc. And now with the growing popularity of Chai, we’re growing our presence in other mainstream grocery stores across Gujrat.
              </p>
            </div>
          </div>
          <div className="content2">
            <div className="imgContent">
              <img src={"/assets/about us/cup-with-tea-mint.webp"} alt="" />
            </div>
            <div className="textContent">
              <h4>The Company</h4>
              <p>
                We couldn’t have come so far without the blessings of Mother Nature and the support of our farmers. So we strive hard to hold ourselves to the highest social and environmental standards.
                {/* <br/>
                We utilize sustainably sourced ingredients and recyclable packing materials. Our facilities and manufacturing partners have implemented solar power programs, extensive recycling programs, and reduced water consumption. We are also focused on efforts to eliminate waste, reduce energy, reduce packaging, and increase use of renewable energy sources. */}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default AboutPage;
