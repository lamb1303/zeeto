import React from "react";
import "./Home.scss";
import Card from "./../Card/Card";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Button from "@material-ui/core/Button";
import planet from "../../assets/Ice_planet.png";
import piano from "../../assets/piano.png";
import react from "../../assets/react.png";
import phone from "../../assets/phone.png";
import bicycle from "../../assets/bicycle.png";
import link from "../../assets/link.png";
import lap from "../../assets/lap.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img alt="someImage.png" className="home__image" src={planet} />
        <h1>
          <strong className="home__info">
            This is a template for a simple marketing or informational website.
          </strong>
        </h1>
        <Button variant="contained" color="primary">
          Information
        </Button>
        <div className="home__row">
          <Card
            key="12"
            rating={4}
            price="9999.99"
            title=" At ipsa rerum quidem delectus magnam porro corrupti!"
            image={piano}
          />
          <Card
            key="123"
            rating={5}
            price="29.99"
            title=" At ipsa rerum quidem delectus magnam porro corrupti!"
            image={react}
          />
        </div>
        <div className="home__row">
          <Card
            key="1234"
            rating={3}
            price="59.99"
            title="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
            image={phone}
          />
          <Card
            key="12345"
            rating={5}
            price="69.99"
            title="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
            image={bicycle}
          />
          <Card
            key="123456"
            rating={2}
            price="399.99"
            title="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
            image={link}
          />
        </div>
        <div className="home__row">
          <Card
            key="1234567"
            rating={4}
            price="799.99"
            title="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
            image={lap}
          />
        </div>
        <div style={{ padding: "20px" }} className="home__row">
          <Contact />
        </div>
        <div className="home__row">
          <About />
        </div>
      </div>
    </div>
  );
};

export default Home;
