import React from "react";
import "../styles/Home.css";
import dog from "../assets/dog.png";
import bg from "../assets/bg.png";
import call from "../assets/call.png";
import car from "../assets/car.png";
import check from "../assets/check.png";
import percentage from "../assets/percentage.png";
import Banner from "../assets/Banner.png";
import Services from "./Services";

import Banner2 from "../assets/Banner2.png";
import Banner3 from "../assets/Banner3.png";
import Products from "./Products";
function Home(props) {
  console.log("Props Cart", props.cart);

  return (
    <div className="parent">
      <div className="bg-div">
        <div className="heading-div">
          <span className="top-heading">We care for your pets </span>
          <h1 className="sec-heading">
            We Help You Care for Animals with Nutrition
          </h1>
          <span className="third-heading">
            All offers are subject to availability. Ut tortor pretium viverra
            suspendisse potenti nullam ac tortor vitae. Consectetur a erat nam
            at. Potenti nullam ac tortor vitae purus faucibus ornare.
          </span>
          <div className="content-div-parent">
            <div className="key-content-div">
              <div>
                <img src={car} />
              </div>
              <div className="content-desc-div">
                <span className="key-conent-heading">Trust & Safety</span>
                <span className="key-conent-desc">Velit euismod pellentes</span>
              </div>{" "}
            </div>
            <div className="key-content-div">
              <div>
                <img src={percentage} />
              </div>
              <div className="content-desc-div">
                <span className="key-conent-heading">Discounts </span>
                <span className="key-conent-desc">Bibendum ut tristique </span>
              </div>{" "}
            </div>
            <div className="key-content-div">
              <div>
                <img src={call} />
              </div>
              <div className="content-desc-div">
                <span className="key-conent-heading">Support</span>
                <span className="key-conent-desc">
                  Egestas quis ipsum velit{" "}
                </span>
              </div>{" "}
            </div>
            <div className="key-content-div">
              <div>
                <img src={check} />
              </div>
              <div className="content-desc-div">
                <span className="key-conent-heading">Guarantee</span>
                <span className="key-conent-desc">
                  Convallis tellus id interdum{" "}
                </span>
              </div>{" "}
            </div>
          </div>
        </div>
        <div>
          <img src={dog} alt="dog" className="home-dog" />
          <img src={bg} alt="bg" className="home-bg" />
        </div>
      </div>
      <div className="home-banner">
        <img src={Banner} />
      </div>
      <div>
        <div className="services-div">
          <span className="services-heading">OUR SERVICES</span>
          <h1 className="services-desc mt-3">All Pet Care Services</h1>
        </div>
        <Services />
      </div>

      <div className="Sec-Banners-div">
        <img src={Banner2} />
      </div>
      <div className="products-div">
        <Products />
      </div>
      <div className="mt-4">
        <img src={Banner3} />
      </div>
    </div>
  );
}
export default Home;
