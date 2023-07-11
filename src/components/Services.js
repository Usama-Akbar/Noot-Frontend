import React from "react";
import "../styles/Services.css";
import Serice1 from "../assets/Service-1.png";
import Serice2 from "../assets/Service-2.png";
import Serice3 from "../assets/Service-3.png";
import Serice4 from "../assets/Service-4.png";
import Serice5 from "../assets/Service-5.png";
import Serice6 from "../assets/Service-6.png";
import Path from "../assets/Path.png";
import RightArrow from "../assets/arrow-right.png";
import Card from "react-bootstrap/Card";
import Cardbg from "../assets/card-bg.png";
import SelectedBG from "../assets/selected-bg.png";

function Services(props) {
  return (
    <div className="main-services-div">
      <Card className="service-card">
        <Card.Img src={Cardbg} alt="Card image" />

        <Card.ImgOverlay>
          <Card.Title>
            <img className="service-img" src={Serice3} />
            <span className="service-title ms-3">Walking & Sitting</span>
          </Card.Title>
          <Card.Text>
            <div>
              <span className="service-desc">
                Ut tortor pretium viverra suspendisse potenti nullam ac tortor
                vitae eget dolor morbi
              </span>
              <h6 className="service-rate  mt-4">From $15 / hour</h6>
            </div>
            <div className="mt-4">
              <span className="get-service-txt">Get Services</span>{" "}
              <img className="ms-2" src={RightArrow} />
            </div>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Card className="service-card">
        <Card.Img src={Cardbg} alt="Card image" />

        <Card.ImgOverlay>
          <Card.Title>
            <img className="service-img" src={Serice2} />
            <span className="service-title ms-3">Pet Grooming</span>
          </Card.Title>
          <Card.Text>
            <div>
              <span className="service-desc">
                Et odio pellentesque diam volutpat commodo sed egestas egestas
                pellentesque nec nam{" "}
              </span>
              <h6 className="service-rate  mt-4">From $39 / complex</h6>
            </div>
            <div className="mt-4">
              <span className="get-service-txt">Get Services</span>{" "}
              <img className="ms-2" src={RightArrow} />
            </div>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Card className="service-card">
        <Card.Img src={Cardbg} alt="Card image" />

        <Card.ImgOverlay>
          <Card.Title>
            <img className="service-img" src={Serice4} />
            <span className="service-title ms-3">Pet Training</span>
          </Card.Title>
          <Card.Text>
            <div>
              <span className="service-desc">
                Aliquam ut porttitor leo a diam sollicitudin tempor sit amet est
                placerat
              </span>
              <h6 className="service-rate  mt-4">From $27 / hour</h6>
            </div>
            <div className="mt-4">
              <span className="get-service-txt">Get Services</span>{" "}
              <img className="ms-2" src={RightArrow} />
            </div>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>

      <Card className="service-card">
        <Card.Img src={Cardbg} alt="Card image" />

        <Card.ImgOverlay>
          <Card.Title>
            <img className="service-img" src={Serice6} />
            <span className="service-title ms-3">Pet Taxi</span>
          </Card.Title>
          <Card.Text>
            <div>
              <span className="service-desc">
                Maecenas ultricies mi eget mauris pharetra et ultrices
                consectetur adipiscing elit
              </span>
              <h6 className="service-rate  mt-4">From $22 / trip</h6>
            </div>
            <div className="mt-4">
              <span className="get-service-txt">Get Services</span>{" "}
              <img className="ms-2" src={RightArrow} />
            </div>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Card className="service-card">
        <Card.Img src={Cardbg} alt="Card image" />

        <Card.ImgOverlay>
          <Card.Title>
            <img className="service-img" src={Serice1} />
            <span className="service-title ms-3">Health & Wellness</span>
          </Card.Title>
          <Card.Text>
            <div>
              <span className="service-desc">
                Et odio pellentesque diam volutpat commodo sed egestas egestas
                pellentesque nec nam
              </span>
              <h6 className="service-rate  mt-4">From $39 / complex</h6>
            </div>
            <div className="mt-4">
              <span className="get-service-txt">Get Services</span>{" "}
              <img className="ms-2" src={RightArrow} />
            </div>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>

      <Card className="service-card">
        <Card.Img src={Cardbg} alt="Card image" />

        <Card.ImgOverlay>
          <Card.Title>
            <img className="service-img" src={Serice5} />
            <span className="service-title ms-3">Pet Hotel</span>
          </Card.Title>
          <Card.Text>
            <div>
              <span className="service-desc">
                Turpis massa sed elementum tempus egestas sed sed risus aliquam
                urna cursus eget n
              </span>
              <h6 className="service-rate  mt-4">From $15 / night</h6>
            </div>
            <div className="mt-4">
              <span className="get-service-txt">Get Services</span>{" "}
              <img className="ms-2" src={RightArrow} />
            </div>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
export default Services;
